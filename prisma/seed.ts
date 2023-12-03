import { PrismaClient } from '@prisma/client';
import { generateFakeEvent } from './fake_data/event';
import { generateFakeInscription } from './fake_data/inscription';
import { generateFakeAsistance } from './fake_data/asistance';
import { generateFakeReward } from './fake_data/reward';
import { faker } from '@faker-js/faker';
import { generateFakeUser } from './fake_data/user';

const eventos = ["Reunión Inicial", "Brainstorming Ideas", "Selección De Fecha", "Reserva De Lugar", "Contratación De Catering", "Envío De Invitaciones", "Confirmación De Asistencia", "Preparación De Agenda", "Evento Principal", "Seguimiento Post Evento"]

export async function seed(amount: number) {

    const prisma = new PrismaClient();

    const { id: user_id } = await prisma.user.create({
        data: {
            name: 'Alberto Rodríguez Castro',
            email: 'albe02053167@outlook.com',
            password: '123456789',
        }
    })

    for (const event_name of eventos) {

        const { id: event_id } = await generateFakeEvent(user_id, event_name)


        let inscription_count = amount * 4
        let asistance_count = Math.ceil(inscription_count * 0.85)

        for (let j = 0; j < inscription_count; j++) {

            const { id: inscriptor_id } = await generateFakeUser()

            await generateFakeInscription(inscriptor_id, event_id)
        }

        const inscription_list = await prisma.inscription.findMany({ where: { event_id }, select: { id: true } })
        const asistance = faker.helpers.arrayElements(inscription_list, asistance_count)

        for (const { id: inscription_id } of asistance) {
            await generateFakeAsistance(inscription_id)
        }

        await generateFakeReward(event_id)

    }

    await prisma.$disconnect()
}