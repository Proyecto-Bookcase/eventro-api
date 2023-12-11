import {faker} from '@faker-js/faker/locale/es';
import {Prisma, PrismaClient} from '@prisma/client';
import {events} from "./events";

export async function seed() {

    const prisma = new PrismaClient();

    await prisma.role.createMany({
        data: [
            {
                name: "USER"
            },
            {
                name: "ADMIN"
            }
        ]
    })

    await prisma.category.createMany({
        data: [
            {
                name: "Conferencia"
            },
            {
                name: "Taller"
            },
            {
                name: "Webinar"
            }
        ],
        skipDuplicates: true
    })
    const categories = (await prisma.category.findMany({select: {name: true}})).map(category => category.name)

    const user_role_id = (await prisma.role.findFirst({
        where: {name: 'USER'},
        select: {id: true}
    })).id

    // Generar 500 usuarios
    const users: Prisma.UserCreateManyInput[] = [];
    for (let i = 0; i < 500; i++) {
        users.push({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                role_id: user_role_id
            }
        );
    }
    await prisma.user.createMany({data: users, skipDuplicates: true})

    const eventsDto: Prisma.EventCreateManyInput[] = []
    for (const {name, description} of events) {
        eventsDto.push({
            name: name,
            description: description,
            date: faker.date.future(),
            location: faker.location.streetAddress({useFullAddress: true}),
            capacity: faker.number.int({min: 200, max: 700}),
            organizer_email: faker.helpers.arrayElement(users).email,
            category_name: faker.helpers.arrayElement(categories),
        });
    }

    await prisma.event.createMany({data: eventsDto, skipDuplicates: true})

    // Generar inscripciones para cada evento (cantidad aleatoria)
    const inscriptions: Prisma.InscriptionCreateManyInput[] = []
    for (const event of await prisma.event.findMany()) {
        const numInscriptions = faker.number.int({min: 1, max: event.capacity});
        for (let i = 0; i < numInscriptions; i++) {
            const user = faker.helpers.arrayElement(users.filter(user => user.email !== event.organizer_email));
            inscriptions.push({
                date: faker.date.between({from: Date.now(), to: event.date}),
                event_id: event.id,
                user_email: user.email
            });
        }

    }
    await prisma.inscription.createMany({data: inscriptions, skipDuplicates: true})

    // Generar asistencias para cada inscription (cantidad aleatoria)
    const assistants: Prisma.AssistanceCreateManyInput[] = []
    for (const inscription of await prisma.inscription.findMany()) {
        if (faker.number.int(1)) {
            assistants.push({
                date: (await prisma.event.findUnique({
                    where: {id: inscription.event_id},
                    select: {date: true}
                })).date,
                inscription_id: inscription.id
            })
        }
    }

    await prisma.assistance.createMany({data: assistants, skipDuplicates: true})

    // Generar tres premios por evento
    const rewards: Prisma.RewardCreateManyInput[] = []
    for (const event of await prisma.event.findMany({select: {id: true, organizer_email: true}})) {
        const winners: string[] = [event.organizer_email]

        if ((await prisma.event.findUnique({
            where: {id: event.id},
            select: {_count: {select: {inscriptions: {where: {assistance: {isNot: null}}}}}}
        }))._count.inscriptions == 0) break

        const assis = await prisma.assistance.findMany({
            where: {inscription: {event_id: event.id}},
            select: {inscription: {select: {user_email: true}}}
        })
        for (let i = 0; i < 3; i++) {
            const winner = faker.helpers.arrayElement(assis.filter(assi => !winners.includes(assi.inscription.user_email)))
            winners.push(winner.inscription.user_email)
            rewards.push({
                winner_id: (await prisma.assistance.findFirst({where: {inscription: {user_email: winner.inscription.user_email}}})).id,
                name: faker.helpers.arrayElement(['First', "Second", "Third"]),
                description: faker.lorem.sentence(),
            });
        }
    }
    await prisma.reward.createMany({data: rewards, skipDuplicates: true})

    // Generar feedbacks de forma aleatoria para las asistencias
    const feedbaks: Prisma.FeedbackCreateManyInput[] = []
    for (const assistance of await prisma.assistance.findMany()) {
        if (faker.number.int(1)) {
            feedbaks.push({
                    comment: faker.lorem.sentence(),
                    event_id: (await prisma.assistance.findUnique({
                        where: {id: assistance.id},
                        select: {inscription: {select: {event_id: true}}}
                    })).inscription.event_id,
                    assistance_id: assistance.id,
                    ranking: (() => {
                        if (faker.number.int(1)) {
                            return faker.number.int({min: 1, max: 5})
                        }
                    })(),
                },
            );
        }
    }

    await prisma.feedback.createMany({data: feedbaks, skipDuplicates: true})

    // Generar notificaciones de forma aleatoria para los usuarios
    const notifications: Prisma.NotificationCreateManyInput[] = []
    for (const user of users) {
        if (faker.number.int(1)) {
            notifications.push({
                user_email: user.email,
                tittle: faker.lorem.sentence(),
                content: faker.lorem.paragraph(),
                reason: faker.helpers.arrayElement(["Evento", "Inscripcion", "Reward"]),
            })
        }
    }
    await prisma.notification.createMany({data: notifications, skipDuplicates: true})

    prisma.$disconnect();
}
