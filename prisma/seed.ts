import {faker} from '@faker-js/faker/locale/es';
import {Prisma, PrismaClient} from '@prisma/client';

const events = [
    {
        name: 'Conferencia de tecnología',
        description:
            'La conferencia de tecnología es un evento que reúne a profesionales de la industria para discutir las últimas tendencias y desarrollos en el campo de la tecnología. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la inteligencia artificial, la realidad virtual, la robótica y la ciberseguridad. También pueden participar en talleres y sesiones de networking para conocer a otros profesionales y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Seminario de marketing',
        description:
            'El seminario de marketing es un evento que reúne a profesionales del marketing para discutir las últimas tendencias y estrategias en el campo. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como el marketing digital, el marketing de contenidos, el marketing de redes sociales y el marketing de influencers. También pueden participar en talleres y sesiones de networking para conocer a otros profesionales y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Taller de ventas',
        description:
            'El taller de ventas es un evento que reúne a profesionales de ventas para discutir las últimas técnicas y estrategias de ventas. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la generación de leads, la gestión de cuentas y el cierre de ventas. También pueden participar en talleres y sesiones de networking para conocer a otros profesionales y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Congreso de educación',
        description:
            'El congreso de educación es un evento que reúne a profesionales de la educación para discutir las últimas tendencias y desarrollos en el campo. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la educación personalizada, la educación en línea, la educación STEM y la educación financiera. También pueden participar en talleres y sesiones de networking para conocer a otros profesionales y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Festival de música',
        description:
            'El festival de música es un evento que reúne a músicos de todo el mundo para actuar en un mismo lugar. Los asistentes pueden disfrutar de una variedad de géneros musicales, desde el rock hasta el pop, el jazz y la música clásica. También pueden participar en actividades como talleres de música, concursos de bandas y sesiones de autógrafos.',
    },
    {
        name: 'Concierto de rock',
        description:
            'El concierto de rock es un evento que reúne a bandas de rock de todo el mundo para actuar en un mismo lugar. Los asistentes pueden disfrutar de una noche de música enérgica y apasionada. También pueden participar en actividades como concursos de bandas, sesiones de autógrafos y meet and greets.',
    },
    {
        name: 'Exhibición de arte',
        description:
            'La exhibición de arte es un evento que reúne a artistas de todo el mundo para mostrar sus obras de arte. Los asistentes pueden ver una variedad de obras de arte, desde pinturas hasta esculturas, fotografías y videos. También pueden participar en actividades como talleres de arte, conferencias de artistas y sesiones de preguntas y respuestas.',
    },
    {
        name: 'Feria comercial',
        description:
            'La feria comercial es un evento que reúne a empresas de todo el mundo para mostrar sus productos y servicios. Los asistentes pueden conocer las últimas novedades en tecnología, moda, diseño y más. También pueden participar en actividades como conferencias, talleres y concursos.',
    },
    {
        name: 'Torneo deportivo',
        description:
            'El torneo deportivo es un evento que reúne a atletas de todo el mundo para competir en un mismo deporte. Los asistentes pueden disfrutar de una noche de emoción y acción. También pueden participar en actividades como concursos de aficionados, sesiones de autógrafos y meet and greets.',
    },
    {
        name: 'Carrera de atletismo',
        description:
            'La carrera de atletismo es un evento que reúne a corredores de todo el mundo para competir en una misma distancia. Los asistentes pueden disfrutar de una mañana o una tarde de ejercicio y diversión. También pueden participar en actividades como calentamientos, estiramientos y concursos de aficionados.',
    },
    {
        name: 'Maratón',
        description:
            'El maratón es un evento que reúne a corredores de todo el mundo para competir en una distancia de 42,195 kilómetros. Los asistentes pueden disfrutar de una mañana o una tarde de ejercicio y diversión. También pueden participar en actividades como calentamientos, estiramientos y concursos de aficionados.',
    },
    {
        name: 'Concentración de motos',
        description:
            'La concentración de motos es un evento que reúne a motociclistas de todo el mundo para celebrar su pasión por las motos. Los asistentes pueden disfrutar de una variedad de actividades, como exhibiciones de motos, carreras, concursos de habilidad y música en vivo. También pueden participar en actividades de networking y conocer a otros motociclistas.',
    },
    {
        name: 'Congreso de medicina',
        description:
            'El congreso de medicina es un evento que reúne a médicos, enfermeras, investigadores y otros profesionales de la salud para discutir las últimas tendencias y avances en el campo de la medicina. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la investigación médica, la atención al paciente, la educación médica y la gestión de la salud. También pueden participar en talleres y sesiones de networking para conocer a otros profesionales de la salud y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Simposio de ingeniería',
        description:
            'El simposio de ingeniería es un evento que reúne a ingenieros de todo el mundo para discutir las últimas tendencias y avances en el campo de la ingeniería. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la ingeniería civil, la ingeniería mecánica, la ingeniería eléctrica y la ingeniería informática. También pueden participar en talleres y sesiones de networking para conocer a otros ingenieros y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Conferencia de ciencias',
        description:
            'La conferencia de ciencias es un evento que reúne a científicos de todo el mundo para discutir las últimas tendencias y avances en el campo de la ciencia. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la física, la química, la biología, la astronomía y la geología. También pueden participar en talleres y sesiones de networking para conocer a otros científicos y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Foro de economía',
        description:
            'El foro de economía es un evento que reúne a economistas de todo el mundo para discutir las últimas tendencias y desafíos en el campo de la economía. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la economía global, la economía nacional, la economía regional y la economía local. También pueden participar en talleres y sesiones de networking para conocer a otros economistas y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Seminario de derecho',
        description:
            'El seminario de derecho es un evento que reúne a abogados de todo el mundo para discutir las últimas tendencias y desarrollos en el campo del derecho. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como el derecho penal, el derecho civil, el derecho comercial y el derecho internacional. También pueden participar en talleres y sesiones de networking para conocer a otros abogados y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Taller de psicología',
        description:
            'El taller de psicología es un evento que reúne a psicólogos de todo el mundo para discutir las últimas tendencias y desarrollos en el campo de la psicología. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la psicología clínica, la psicología social, la psicología cognitiva y la psicología del desarrollo. También pueden participar en talleres y sesiones de networking para conocer a otros psicólogos y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Congreso de arquitectura',
        description:
            'El congreso de arquitectura es un evento que reúne a arquitectos de todo el mundo para discutir las últimas tendencias y desarrollos en el campo de la arquitectura. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la arquitectura sostenible, la arquitectura bioclimática, la arquitectura urbana y la arquitectura contemporánea. También pueden participar en talleres y sesiones de networking para conocer a otros arquitectos y aprender sobre las últimas oportunidades laborales.',
    },
    {
        name: 'Festival de cine',
        description:
            'El festival de cine es un evento que reúne a cineastas de todo el mundo para presentar sus películas. Los asistentes pueden disfrutar de una variedad de películas, desde películas independientes hasta películas de Hollywood. También pueden participar en actividades como talleres de cine, conferencias de cineastas y sesiones de preguntas y respuestas.',
    },
    {
        name: 'Concierto de jazz',
        description:
            'El concierto de jazz es un evento que reúne a músicos de jazz de todo el mundo para actuar en un mismo lugar. Los asistentes pueden disfrutar de una noche de música en vivo y bailar. También pueden participar en actividades como talleres de jazz, concursos de bandas y sesiones de autógrafos.',
    },
    {
        name: 'Recital de piano',
        description:
            'El recital de piano es un evento que reúne a pianistas de todo el mundo para interpretar obras de música clásica. Los asistentes pueden disfrutar de una variedad de piezas musicales, desde sonatas de Mozart hasta conciertos de Beethoven. También pueden participar en actividades como talleres de piano y concursos de interpretación.',
    },
    {
        name: 'Exposición de fotografía',
        description:
            'La exposición de fotografía es un evento que reúne a fotógrafos de todo el mundo para mostrar sus obras. Los asistentes pueden ver una variedad de fotografías, desde paisajes hasta retratos, naturaleza muerta y fotografía de moda. También pueden participar en actividades como talleres de fotografía y concursos de fotografía.',
    },
    {
        name: 'Feria de artesanías',
        description:
            'La feria de artesanías es un evento que reúne a artesanos de todo el mundo para vender sus productos. Los asistentes pueden comprar una variedad de artículos hechos a mano, desde joyas hasta ropa y muebles. También pueden participar en actividades como talleres de artesanía y concursos de artesanía.',
    },
    {
        name: 'Muestra de pintura',
        description:
            'La muestra de pintura es un evento que reúne a pintores de todo el mundo para mostrar sus obras. Los asistentes pueden ver una variedad de pinturas, desde paisajes hasta retratos, naturaleza muerta y pintura abstracta. También pueden participar en actividades como talleres de pintura y concursos de pintura.',
    },
    {
        name: 'Concurso de dibujo',
        description:
            'El concurso de dibujo es un evento que reúne a dibujantes de todo el mundo para competir por un premio. Los asistentes pueden ver una variedad de dibujos, desde paisajes hasta retratos, naturaleza muerta y dibujo abstracto. También pueden participar en actividades como talleres de dibujo y concursos de dibujo.',
    },
    {
        name: 'Torneo de ajedrez',
        description:
            'El torneo de ajedrez es un evento que reúne a jugadores de ajedrez de todo el mundo para competir por un premio. Los asistentes pueden ver a los jugadores competir en un torneo de ajedrez, así como participar en actividades como talleres de ajedrez y concursos de ajedrez.',
    },
    {
        name: 'Carrera de ciclismo',
        description:
            'La carrera de ciclismo es un evento que reúne a ciclistas de todo el mundo para competir en una carrera de ciclismo. Los asistentes pueden ver a los ciclistas competir en una carrera de ciclismo, así como participar en actividades como talleres de ciclismo y concursos de ciclismo.',
    },
    {
        name: 'Maratón de natación',
        description:
            'El maratón de natación es un evento que reúne a nadadores de todo el mundo para competir en una carrera de natación. Los asistentes pueden ver a los nadadores competir en una carrera de natación, así como participar en actividades como talleres de natación y concursos de natación.',
    },
    {
        name: 'Concentración de autos antiguos',
        description:
            'La concentración de autos antiguos es un evento que reúne a propietarios de autos antiguos para mostrar sus vehículos. Los asistentes pueden ver una variedad de autos antiguos, desde autos de los años 20 hasta los años 80. También pueden participar en actividades como talleres de restauración de autos antiguos y concursos de autos antiguos.',
    },
    {
        name: 'Congreso de astronomía',
        description:
            'El congreso de astronomía es un evento que reúne a astrónomos de todo el mundo para discutir las últimas novedades en el campo de la astronomía. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la formación de estrellas, la evolución de las galaxias y la búsqueda de vida extraterrestre. También pueden participar en actividades como talleres de astronomía y concursos de astronomía.',
    },
    {
        name: 'Simposio de biología',
        description:
            'El simposio de biología es un evento que reúne a biólogos de todo el mundo para discutir las últimas novedades en el campo de la biología. Los asistentes pueden escuchar a expertos de renombre hablar sobre temas como la genética, la evolución, la biología celular y la biología molecular. También pueden participar en actividades como talleres de biología y concursos de biología.',
    },
];

export async function seed() {
    const prisma = new PrismaClient();

    const users: Prisma.UserCreateInput[] = [];

    for (let i = 0; i < 500; i++) {
        users.push({
            email: faker.internet.email(),
            name: faker.person.fullName(),
            password: faker.internet.password({length: 16}),
        });
    }

    await prisma.user.createMany({data: users, skipDuplicates: true});

    for (const event of events) {
        const users_db = await prisma.user.findMany({select: {id: true}});
        const organizer = faker.helpers.arrayElement(users_db);

        const new_event = await prisma.event.create({
            data: {
                name: event.name,
                description: event.description,
                date: faker.date.future({years: 2}),
                location: faker.location.streetAddress(),
                organizer_id: organizer.id,
            },
        });

        const inscription_number = faker.number.int({min: 0, max: 300});
        const assistance_number =
            inscription_number *
            faker.number.float({min: 0, max: 1, precision: 0.0001});

        const inscriptions: Prisma.InscriptionCreateManyInput[] = [];

        const users_id = faker.helpers.arrayElements(users_db, inscription_number);
        for (const user of users_id) {
            inscriptions.push({
                date: faker.date.between({
                    from: Date.now(),
                    to: new_event.date,
                }),
                event_id: new_event.id,
                user_id: user.id,
            });
        }
        await prisma.inscription.createMany({data: inscriptions});

        const inscriptions_db = await prisma.inscription.findMany({
            select: {id: true},
        });

        const assistants: Prisma.AssistanceCreateManyInput[] = [];
        const inscriptions_id = faker.helpers.arrayElements(
            inscriptions_db,
            assistance_number,
        );
        for (const inscription of inscriptions_id) {
            assistants.push({
                inscription_id: inscription.id,
                date: new_event.date,
            });
        }

        await prisma.assistance.createMany({
            data: assistants,
            skipDuplicates: true,
        });

        const user_that_assists_id = (
            await prisma.event.findUnique({
                where: {id: new_event.id},
                select: {
                    inscriptions: {
                        where: {
                            assistance: {
                                isNot: null,
                            },
                        },
                        select: {
                            user_id: true,
                        },
                    },
                },
            })
        ).inscriptions;

        console.log(user_that_assists_id.length);

        if (user_that_assists_id.length > 0) {
            const winner_id =
                faker.helpers.arrayElement(user_that_assists_id).user_id;
            if (winner_id) {
                await prisma.reward.create({
                    data: {
                        event: {connect: {id: new_event.id}},
                        winner: {connect: {id: winner_id}},
                    } as Prisma.RewardCreateInput,
                });
            }
        }
    }

    prisma.$disconnect();
}
