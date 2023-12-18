import express from "express";
import {
  get,
  storeTransactionSchedule,
} from "../controllers/transactionSchedule.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionSchedule);

export default router;
