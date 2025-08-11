import { Router } from "express";
import ArtistService from "../services/ArtistService";

const router = Router();

router.get("/", async (req, res) => {
  const artists = await ArtistService.findAll();
  res.json(artists);
});

export default router;
