import { PrismaClient, Song } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  create: (data: Omit<Song, "id">) => prisma.song.create({ data }),
  findAll: () => prisma.song.findMany(),
  findById: (id: number) => prisma.song.findUnique({ where: { id } }),
  update: (id: number, data: Partial<Omit<Song, "id">>) =>
    prisma.song.update({ where: { id }, data }),
  delete: (id: number) => prisma.song.delete({ where: { id } }),
};
