import mongoose from "mongoose";

const TransactionVideoEmailSchema = new mongoose.Schema({
  name: String, 
  transactionId: String,
  company: {
    id: String,
    name: String
  },
  from: String,
  to: String,
  list:[{
    title: String,
    description: String
  }],
  subject: String,
  template: String,
  includeVideo: Boolean,
  preRecordedVideo: String,
  description: String,
  attachment: String,
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

const TransactionVideoEmail = mongoose.model("TransactionVideoEmail", TransactionVideoEmailSchema);
export default TransactionVideoEmail;

// ["Listing", "Purchase", "Lease"]