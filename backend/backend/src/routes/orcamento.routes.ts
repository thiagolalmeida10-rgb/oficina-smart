import { Router } from "express";
import { OrcamentoController } from "../controllers/OrcamentoController";

const router = Router()

const controller = new OrcamentoController()

router.post("/orcamento", (req,res)=> controller.criar(req,res))

export default router