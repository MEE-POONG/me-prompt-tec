
import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
    const members = await prisma.member.findMany({
        select: { id: true, name: true, photo: true }
    });
    console.log('Members:', JSON.stringify(members, null, 2));

    const interns = await prisma.intern.findMany({
        select: { id: true, name: true, avatar: true }
    });
    console.log('Interns:', JSON.stringify(interns, null, 2));

    const images = await prisma.cloudflareImage.findMany();
    console.log('CloudflareImages:', JSON.stringify(images, null, 2));
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
