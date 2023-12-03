import { faker } from "@faker-js/faker/locale/es"
import { prisma } from "prisma/client/prisma"

export async function generateFakeReward(event_id: string) {

    const client = prisma

    const participants = await client.asistance.findMany({
        where: {
            inscription: {
                event: {
                    id: event_id,
                }
            }
        },
        select: {
            inscription: {
                select: {
                    user: true
                }
            }
        }
    })

    const to_win = faker.helpers.arrayElement(participants)

    const winner = await prisma.reward.create({
        data: {
            winner_id: to_win.inscription.user.id,
            event_id,
        }
    })

    await client.$disconnect()

    return winner
}