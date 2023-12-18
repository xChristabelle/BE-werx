import mongoose from "mongoose";

const TransactionActivityLogSchema = new mongoose.Schema({
  name: String, 
  transactionId: String,
  company: {
    id: String,
    name: String
  },
  description: String,
  datetime: String,
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

const TransactionActivityLog = mongoose.model("TransactionActivityLog", TransactionActivityLogSchema);
export default TransactionActivityLog;
