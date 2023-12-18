import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";
import TransactionSchedule from "../models/TransactionSchedule.js";

export const get = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const userInformation = await UserInformation.findOne({ userId: id });
    res.status(200).json({ user, userInformation });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const storeTransactionDocuments = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);
    const transaction = await Transaction.findById(req.body.transactionId);

    console.log(
      "🚀 ~ file: transactionSchedule.js:23 ~ storeTransactionDocuments ~ transaction:",
      transaction
    );

    let transactionSchedule = new TransactionSchedule({
      transactionId: transaction._id,
      company: {
        id: req.body.companyId,
        name: company.name,
      },

      documentName: req.body.documentName,
      phase: req.body.phase,
      private: req.body.private,
      uploadedBy: req.body.uploadedBy,
      notes: req.body.notes,
    });

    // await transactionSchedule.save();

    res.json({
      message: "Transaction Added Successfully!",
      isSuccess: true,
    });
  } catch (error) {
    res.json({
      message: "Agent not Successfully Added, An error Occured!",
      isSuccess: false,
      error: error,
    });
  }
};
