import { prisma } from "../db.js";

const index = (req, res) => {
  res.send("Deudas");
};

const getDeudas = async (req, res) => {
  const deudas = await prisma.deuda.findMany();
  res.json(deudas);
};

export const controller = { index, getDeudas };
