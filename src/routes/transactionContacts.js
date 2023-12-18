import express from "express";
import {
  get,
  storeTransactionContacts,
} from "../controllers/transactionContacts.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionContacts);

export default router;
