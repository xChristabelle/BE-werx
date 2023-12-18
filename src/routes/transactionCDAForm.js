import express from "express";
import {
  get,
  storeTransactionCDAForm,
} from "../controllers/transactionCDAForm.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", get);
router.post("/add", upload.single("image"), storeTransactionCDAForm);

export default router;
