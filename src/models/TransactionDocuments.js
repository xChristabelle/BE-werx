import mongoose from "mongoose";

const TransactionDocumentsSchema = new mongoose.Schema({
  name: String, 
  transactionId: String,
  company: {
    id: String,
    name: String
  },
  documentName: String,
  phase: String,
  private: String,
  uploadedBy: String,
  notes: String,
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

const TransactionDocuments = mongoose.model("TransactionDocuments", TransactionDocumentsSchema);
export default TransactionDocuments;
