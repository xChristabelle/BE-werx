import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";
import TransactionVideoEmail from "../models/TransactionVideoEmail.js";

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

export const storeTransactionVideoEmail = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);
    const transaction = await Transaction.findById(req.body.transactionId);
    console.log(
      "🚀 ~ file: transactionVideoEmail.js:23 ~ storeTransactionVideoEmail ~ transaction:",
      transaction
    );

    let transactionVideoEmail = new TransactionVideoEmail({
      transactionId: transaction._id,
      company: {
        id: req.body.companyId,
        name: company.name,
      },

      title: req.body.title,
      summary: req.body.summary,
      location: req.body.location,
      timezone: req.body.timezone,
      startDate: req.body.startDate,
      recurring: req.body.recurring,
      taskType: req.body.taskType,
    });

    // await transactionVideoEmail.save();

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
