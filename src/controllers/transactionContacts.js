import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";
import TransactionContacts from "../models/TransactionContacts.js";

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

export const storeTransactionContacts = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);
    const transaction = await Transaction.findById(req.body.transactionId);
    console.log(
      "🚀 ~ file: transactionContacts.js:23 ~ storeTransactionContacts ~ transaction:",
      transaction
    );

    let transactionContacts = new TransactionContacts({
      transactionId: transaction._id,
      company: {
        id: req.body.companyId,
        name: company.name,
      },
      client: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
      },
      partner: {
        name: req.body.name,
        company: req.body.company,
        propertyAddress: {
          street: req.body.street,
          city: req.body.city,
          state: {
            name: req.body.name,
            abbr: req.body.abbr,
          },
          postalCode: req.body.postalCode,
          country: req.body.type,
        },
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      },
    });

    // await transactionContacts.save();

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
