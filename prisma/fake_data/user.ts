import { faker } from "@faker-js/faker/locale/es";
import { prisma } from "prisma/client/prisma";


export async function generateFakeUser() {

    const client = prisma

    const user = await client.user.create({
        data: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
    })

    await client.$disconnect()

    return user
}