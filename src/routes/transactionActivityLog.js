import express from "express";
import {
  get,
  storeTransactionActivityLog,
} from "../controllers/transactionActivityLog.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionActivityLog);

export default router;
