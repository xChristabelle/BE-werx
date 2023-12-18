import express from "express";
import {
  get,
  storeTransactionDetails,
} from "../controllers/transactionDetails.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionDetails);

export default router;
