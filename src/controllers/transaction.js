import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";

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

export const storeTransaction = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);

    let transaction = new Transaction({
      company: {
        id: req.body.companyId,
        name: company.name,
      },
      representing: req.body.representing,
      transactionType: req.body.transactionType,
      sellerType: req.body.sellerType,
      usingVALoan: req.body.usingVALoan,
      usingFHALoan: req.body.usingFHALoan,
      isTenantExist: req.body.isTenantExist,
      isEntity: req.body.isEntity,
      builtPrior1978: req.body.builtPrior1978,
      builtPrior1960: req.body.builtPrior1960,
      isInHOA: req.body.isInHOA,
      shortSale: req.body.shortSale,
      usingNonCARContract: req.body.usingNonCARContract,
      applyLeadCommissionPlan: req.body.applyLeadCommissionPlan,
      propertyAddress: {
        street: req.body.street,
        city: req.body.city,
        state: {
          name: req.body.state,
          abbr: req.body.abbr,
        },
        postalCode: req.body.postalCode,
        country: req.body.country,
      },
      client: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
      },
    });

    await transaction.save();
    console.log("🚀 ~ file: transactions.js:58 ~ storeTransaction ~ transaction:", transaction)

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


