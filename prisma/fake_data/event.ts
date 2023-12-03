import { faker } from "@faker-js/faker/locale/es"
import { prisma } from "prisma/client/prisma"

export async function generateFakeEvent(user_id: string, event_name?: string) {

    const client = prisma

    const event = await client.event.create({
        data: {
            name: event_name ?? faker.lorem.lines(),
            description: faker.lorem.paragraph(),
            date: faker.date.soon({ days: 30 }),
            location: faker.location.city(),
            organizer_id: user_id,
        }
    })

    await client.$disconnect()

    return event
}