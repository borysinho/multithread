import { Router } from "express";
import { controller } from "../controllers/pagos.controller.js";
const router = Router();

router.get("/pagos", controller.index);

export default router;
