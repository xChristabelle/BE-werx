import mongoose from "mongoose";

const TransactionCDAFormSchema = new mongoose.Schema({
  name: String,
  transactionId: String,
  company: {
    id: String,
    name: String,
  },
  phoneNumber: String,
  fileNumber: String,
  contactName: String,
  fax: String,
  emailAddress: String,
  corporateName: String,
  EIN: String,
  message: String,
  settlementCharges: [{
    charges: String,
    amount: String,
    chargedTo: String
  }],
  disbursement: [{
    disbursement: String,
    amount: String,
    payTo: String,
    payFrom: String
  }],
  oppositePartyCommission: {
    item: String,
    amount: String,
    chargedTo: String
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

const TransactionCDAForm = mongoose.model(
  "TransactionCDAForm",
  TransactionCDAFormSchema
);
export default TransactionCDAForm;
 