import UserService from "./domains/User/services/UserService";

async function main() {
  const body = {
    id: 0,
    nome: "Maria",
    email: "maria@gmail.com",
    senha: "senha12345",
    foto: "foto.jpg",
    permissao: false,
  };

  try {
    const user = await UserService.create(body);
    console.log("Usuário criado:", user);
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed")) {
      console.log("Erro: Email já cadastrado!");
    } else {
      console.error("Erro ao criar usuário:", error);
    }
  }
}

main();
