import mongoose from "mongoose";

const TransactionNotesSchema = new mongoose.Schema({
  name: String, 
  company: {
    id: String,
    name: String
  },
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

const TransactionNotes = mongoose.model("TransactionNotes", TransactionNotesSchema);
export default TransactionNotes;

// ["Listing", "Purchase", "Lease"]