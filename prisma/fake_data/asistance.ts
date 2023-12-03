import { faker } from "@faker-js/faker/locale/es"
import { prisma } from "prisma/client/prisma"

export async function generateFakeAsistance(inscription_id: string) {

    const client = prisma

    const { date } = await client.inscription.findUnique({
        where: {
            id: inscription_id,
        },
        include: {
            event: {
                select: {
                    date: true
                }
            }
        }
    })

    const asistance = await client.asistance.create({
        data: {
            inscription_id,
            date: faker.date.past({ refDate: date }),
        }
    })

    await client.$disconnect()

    return asistance
}