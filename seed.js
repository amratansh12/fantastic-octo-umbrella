import { prisma } from "./lib/utils.js";

async function main() {
  await prisma.hotel.createMany({
    data: [
      {
        name: "Hotel 1",
        location: "Location 1",
        price: 100,
      },
      {
        name: "Hotel 2",
        location: "Location 2",
        price: 90,
      },
      {
        name: "Hotel 3",
        location: "Location 3",
        price: 80,
      },
      {
        name: "Hotel 4",
        location: "Location 4",
        price: 70,
      },
      {
        name: "Hotel 5",
        location: "Location 5",
        price: 60,
      },
      {
        name: "Hotel 6",
        location: "Location 6",
        price: 100,
      },
      {
        name: "Hotel 7",
        location: "Location 7",
        price: 90,
      },
      {
        name: "Hotel 8",
        location: "Location 8",
        price: 80,
      },
      {
        name: "Hotel 9",
        location: "Location 9",
        price: 70,
      },
      {
        name: "Hotel 10",
        location: "Location 10",
        price: 60,
      },
    ],
  });
}

main();
