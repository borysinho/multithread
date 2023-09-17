import { Router } from "express";
import { controller } from "../controllers/deudas.controller.js";

const router = Router();

router.get("/deudas", controller.index);

export default router;
