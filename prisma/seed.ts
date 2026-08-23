import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const defaultProjects = [
  {
    title: "Brand Film",
    category: "Video",
    imageUrl: "/assets/projects/brand-film.jpg",
    status: "concept",
    featured: true,
  },
  {
    title: "Product Shoot",
    category: "Photo",
    imageUrl: "/assets/projects/product-shoot.jpg",
    status: "concept",
    featured: true,
  },
  {
    title: "Live Event",
    category: "Event",
    imageUrl: "/assets/projects/live-event.jpg",
    status: "concept",
    featured: true,
  },
  {
    title: "Social Content",
    category: "Social",
    imageUrl: "/assets/projects/social-content.jpg",
    status: "concept",
    featured: false,
  },
  {
    title: "Property Shoot",
    category: "Product",
    imageUrl: "/assets/projects/property-shoot.jpg",
    status: "concept",
    featured: false,
  },
  {
    title: "Branding Design",
    category: "Branding",
    imageUrl: "/assets/projects/branding-design.jpg",
    status: "concept",
    featured: false,
  },
];

async function main() {
  console.log("Seeding initial projects...");
  for (const proj of defaultProjects) {
    const existing = await prisma.project.findFirst({
      where: { title: proj.title },
    });
    if (!existing) {
      await prisma.project.create({
        data: proj,
      });
      console.log(`Created project: ${proj.title}`);
    }
  }
  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
