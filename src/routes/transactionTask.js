import express from "express";
import {
  get,
  storeTransactionTask,
} from "../controllers/transactionTask.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionTask);

export default router;
