import { PrismaClient, Artist } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  create: (data: Omit<Artist, "id">) => prisma.artist.create({ data }),
  findAll: () => prisma.artist.findMany(),
  findById: (id: number) => prisma.artist.findUnique({ where: { id } }),
  update: (id: number, data: Partial<Omit<Artist, "id">>) =>
    prisma.artist.update({ where: { id }, data }),
  delete: (id: number) => prisma.artist.delete({ where: { id } }),
};
