// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records

  await prisma.user.create({
    data: {
       name: "Tim",
       messages: {
        createMany: 
        {
            data: [
                {
                    name: "Another note for Jack"
                },
                {
                    name: "A Note for Jack"
                }
            ]
        }
       } 
    },
    
    
  })


  await prisma.user.create({
    data: {
       name: "Adam",
       messages: {
        createMany: 
        {
            data: [
                {
                    name: "A Note for Adam"
                },
                {
                    name: "Another note for Adam"
                }
            ]
        }
       } 
    },
    
    
  })

  await prisma.user.create({
    data: {
       name: "Jack",
       messages: {
        createMany: 
        {
            data: [
                {
                    name: "A Note for Jack"
                },
                {
                    name: "Another note for Jack"
                }
            ]
        }
       } 
    },
    
    
  })

}

main().then(() => {
  console.log("Data seeded...");
});