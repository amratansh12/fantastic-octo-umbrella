import { prisma } from "../lib/utils.js";

export const getHotels = async (req, res) => {
  const hotels = await prisma.hotel.findMany();
  res.status(200).json({ hotels });
};

export const getHotelById = async (req, res) => {
  const { id } = req.params;
  const hotel = await prisma.hotel.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({ hotel });
};
