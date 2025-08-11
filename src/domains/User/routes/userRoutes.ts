import { Router, Request, Response } from "express";
import UserService from "../domains/User/services/UserService";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed")) {
      return res.status(400).json({ error: "Email já cadastrado!" });
    }
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  const users = await UserService.findAll();
  res.json(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await UserService.findById(id);
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(user);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const updatedUser = await UserService.update(id, req.body);
    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await UserService.delete(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
