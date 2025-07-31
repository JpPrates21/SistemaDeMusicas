import { Usuario } from "@prisma/client";
import prisma from "../../../../config/prismaClients";

class UserService {
    async create(body: Usuario){
        const user = await prisma.usuario.create({
            data: {
                nome: body.nome,
                email: body.email,
                senha: body.senha,
                foto: body.foto,
                permissao: body.permissao,
            }
    });
    return user;
    }
}

export default new UserService();