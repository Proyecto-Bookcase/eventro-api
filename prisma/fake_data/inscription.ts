import { faker } from "@faker-js/faker/locale/es"
import { prisma } from "prisma/client/prisma"

export async function generateFakeInscription(user_id: string, event_id: string) {

    const client = prisma

    const event = await client.event.findUnique({
        where: {
            id: event_id,
        },
        select: {
            date: true
        }
    })

    const inscription = await client.inscription.create({
        data: {
            user_id,
            event_id,
            date: faker.date.past({ refDate: event.date }),
        }
    })

    await client.$disconnect()

    return inscription
}