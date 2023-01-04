import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const action_1 = await prisma.action.upsert({
        where: { id: "action_1" },
        update: {},
        create: {
            id: "action_1",
            group: ["grp1"],
            name: ["Alice"],
            created_at: new Date(),
            target_id: "trgtid",
            target_type: ["typetrg"]
        },
    });
    console.log(action_1);
    
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
