import { Router } from "express";
import { ProducerController } from "../Controllers/producer.controller";

const router = Router();
const controller = ProducerController();

router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.get("/", controller.getAll)
router.get("/:id", controller.getById)

export default router;
