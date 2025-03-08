import { prisma } from "../lib/utils.js";

export const createWebCheckIn = async (req, res) => {
  // id Int @id @default(autoincrement())
  // bookingId Int
  // aadhaar String
  // booking Booking @relation(fields: [bookingId], references: [id])

  const { bookingId, aadhaar } = req.body;

  const webCheckIn = await prisma.webCheckIn.create({
    data: {
      booking: {
        connect: {
          id: bookingId,
        },
      },
      aadhaar,
    },
  });

  res.status(201).json({ webCheckIn });
};
