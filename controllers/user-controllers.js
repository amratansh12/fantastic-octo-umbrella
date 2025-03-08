import { prisma } from "../utils/lib.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUserExist) {
    return res.status(400).json({ message: "User already exist" });
  }

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  res.status(201).json({ message: "User created successfully" });
};
