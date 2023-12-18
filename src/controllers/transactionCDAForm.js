import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";
import TransactionCDAForm from "../models/TransactionCDAForm.js";

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

export const storeTransactionCDAForm = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);
    const transaction = await Transaction.findById(req.body.transactionId);

    let transactionCDAForm = new TransactionCDAForm({
      transactionId: transaction._id,
      company: {
        id: req.body.companyId,
        name: company.name,
      },

      phoneNumber: req.body.phoneNumber,
      fileNumber: req.body.fileNumber,
      contactName: req.body.contactName,
      fax: req.body.fax,
      emailAddress: req.body.emailAddress,
      corporateName: req.body.corporateName,
      EIN: req.body.EIN,
      message: req.body.message,
      settlementCharges: {
        charges: req.body.charges,
        amount: req.body.amount,
        chargedTo: req.body.chargedTo
      },
      disbursement: {
        disbursement: req.body.disbursement,
        amount: req.body.amount,
        payTo: req.body.payTo,
        payFrom: req.body.payFrom
      },
      oppositePartyCommission: {
        item: req.body.item,
        amount: req.body.amount,
        chargedTo: req.body.chargedTo
      },
    });

    // await transactionCDAForm.save();

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
