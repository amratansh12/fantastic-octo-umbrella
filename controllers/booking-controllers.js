import { prisma } from "../lib/utils.js";

export const createBooking = async (req, res) => {
  const { userId, hotelId, checkIn, checkOut } = req.body;

  const booking = await prisma.booking.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      hotel: {
        connect: {
          id: hotelId,
        },
      },
      checkIn,
      checkOut,
    },
  });
  res.status(201).json({ booking });
};

export const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;

  const bookings = await prisma.booking.findMany({
    where: {
      userId: parseInt(userId),
    },
  });

  res.status(200).json({ bookings });
};
