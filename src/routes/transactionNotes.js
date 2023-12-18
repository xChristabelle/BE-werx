import express from "express";
import {
  get,
  storeTransactionNotes,
} from "../controllers/transactionNotes.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionNotes);

export default router;
