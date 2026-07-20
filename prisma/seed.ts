import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Seed User
  const admin = await prisma.user.upsert({
    where: { email: "admin@girstay.com" },
    update: {},
    create: {
      email: "admin@girstay.com",
      name: "Admin User",
      passwordHash: "mock-hash", // Use bcrypt in prod
      role: "ADMIN",
    },
  });

  // Seed Property
  const property = await prisma.property.upsert({
    where: { slug: "the-fern-gir-forest-resort" },
    update: {},
    create: {
      slug: "the-fern-gir-forest-resort",
      name: "The Fern Gir Forest Resort",
      description: "A luxury eco-resort nestled in the heart of Sasan Gir.",
      basePrice: 12500,
      maxGuests: 4,
      rooms: {
        create: [
          { roomNumber: "101" },
          { roomNumber: "102" },
          { roomNumber: "103" },
        ],
      },
    },
  });

  console.log(`Seeded admin: ${admin.email}`);
  console.log(`Seeded property: ${property.name} with 3 rooms`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
