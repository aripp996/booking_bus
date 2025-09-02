import { PrismaClient, Role } from "../lib/generated/prisma"
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash('admin123', 10)

    const userSeed = await prisma.user.create({
        data: {
            email: 'admin@mail.com',
            name: 'Admin',
            role: "admin",
            password
        }
    })

    console.log(userSeed);
}

main()