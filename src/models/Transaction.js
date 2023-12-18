import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  userId: String,
  transactionId: String,
  company: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  representing: String,
  transactionType: String,
  sellerType: String,
  usingVALoan: Boolean,
  usingFHALoan: Boolean,
  isTenantExist: Boolean,
  isEntity: Boolean,
  builtPrior1978: Boolean,
  builtPrior1960: Boolean,
  isInHOA: Boolean,
  shortSale: Boolean,
  usingNonCARContract: Boolean,
  applyLeadCommissionPlan: Boolean,
  propertyAddress: {
    street: String,
    city: String,
    state: {
      name: String,
      abbr: String,
    },
    postalCode: String,
    country: {
      type: String,
      default: "United States of America",
    },
  },
  client: {
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    work: String,
    home: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
    default: "",
  },
  deleted: {
    type: Boolean,
    default: 0,
  },
  deletedBy: {
    type: String,
    default: "",
  },
  deletedOn: {
    type: Date,
    default: "",
  },
  modifiedBy: {
    type: String,
    default: "",
  },
  modifiedOn: {
    type: Date,
    default: "",
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
