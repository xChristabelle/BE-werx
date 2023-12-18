import { getFileStream, uploadFile, uploadFiles } from "../middleware/s3.js";
import fs from "fs";
import util from "util";
import Company from "../models/Company.js";
import Transaction from "../models/Transaction.js";
import TransactionDetails from "../models/TransactionDetails.js";

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

export const storeTransactionDetails = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.companyId);
    const transaction = await Transaction.findById(req.body.transactionId);
    console.log(
      "🚀 ~ file: transactionDetails.js:23 ~ storeTransactionDetails ~ transaction:",
      transaction
    );

    let transactionDetails = new TransactionDetails({
      transactionId: transaction._id,
      company: {
        id: req.body.companyId,
        name: company.name,
      },

      transactionType: req.body.transactionType,
      transactionPhase: req.body.transactionPhase,
      client: req.body.client,
      leadCommissionPlan: req.body.leadCommissionPlan,
      cashDeal: req.body.cashDeal,
      
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

      salesPrice: req.body.salesPrice,
      howMuchMoneyHeld: req.body.howMuchMoneyHeld,
      whereMoneyHeld: req.body.whereMoneyHeld,
      whenMoneyHeldDue: req.body.whenMoneyHeldDue,
      listedDate: req.body.listedDate,
      listingExpirationDate: req.body.listingExpirationDate,
      acceptanceDate: req.body.acceptanceDate,
      homeInspectionContigencyDate: req.body.homeInspectionContigencyDate,
      appraisalDate: req.body.appraisalDate,
      loanContigencyDate: req.body.loanContigencyDate,
      closing: req.body.closing,
      expirationDate: req.body.expirationDate,
      TerminationDate: req.body.TerminationDate,
      downPayment: req.body.downPayment,
      MLSNumber: req.body.MLSNumber,
      listingClient: req.body.listingClient,
      transactionState: req.body.transactionState,
      municipality: req.body.municipality,
      transactionCounty: req.body.transactionCounty,
      transactionCity: req.body.transactionCity,
      transactionZip: req.body.transactionZip,
      propertyTax: req.body.propertyTax,
      listingPrice: req.body.listingPrice,
      commissionPercentage: req.body.commissionPercentage,
      legalDescription: req.body.legalDescription,
      sellerName: req.body.sellerName,
      buyerName: req.body.buyerName,
      sellerPhoneNumber: req.body.sellerPhoneNumber,
      sellerEmailAddress: req.body.sellerEmailAddress,
      leadSource: req.body.leadSource,
    });
    console.log(
      "🚀 ~ file: transactionDetails.js:42 ~ storeTransactionDetails ~ transactionDetails:",
      transactionDetails
    );

    // await transactionDetails.save();

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
