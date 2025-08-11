import { PrismaClient, Usuario } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  create: (data: Omit<Usuario, "id">) => prisma.usuario.create({ data }),
  findAll: () => prisma.usuario.findMany(),
  findById: (id: number) => prisma.usuario.findUnique({ where: { id } }),
  update: (id: number, data: Partial<Omit<Usuario, "id">>) =>
    prisma.usuario.update({ where: { id }, data }),
  delete: (id: number) => prisma.usuario.delete({ where: { id } }),
};
