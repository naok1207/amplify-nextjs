const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  let posts = [
    {
      title: "First post",
      description: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "first-post-1",
    },
    {
      title: "Second post",
      description: "Ipsum dolor sit amet",
      content:
        "Tristique sollicitudin nibh sit amet commodo. Feugiat vivamus at augue eget",
      slug: "second-post-2",
    },
  ];

  await prisma.post.createMany({
    data: posts,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
