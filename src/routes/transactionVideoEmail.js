import express from "express";
import {
  get,
  storeTransactionVideoEmail,
} from "../controllers/transactionVideoEmail.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionVideoEmail);

export default router;
