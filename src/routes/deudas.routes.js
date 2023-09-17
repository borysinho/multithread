import { Router } from "express";
import { controller } from "../controllers/deudas.controller.js";

const router = Router();

router.get("/deudas", controller.getDeudas);

export default router;
