import express from "express";
import {
  get,
  storeTransactionDocuments,
} from "../controllers/transactionDocuments.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionDocuments);

export default router;
