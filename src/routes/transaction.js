import express from "express";
import {
  get,
  storeTransaction,
} from "../controllers/transaction.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransaction);

export default router;
