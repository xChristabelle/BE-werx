import mongoose from "mongoose";

const TransactionTaskSchema = new mongoose.Schema({
  name: String,
  company: {
    id: String,
    name: String,
  },
  task: String,
  phase: String,
  assignedTo: String,
  isComplete: String,
  completedBy: String,
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

const TransactionTask = mongoose.model(
  "TransactionTask",
  TransactionTaskSchema
);
export default TransactionTask;

// ["Listing", "Purchase", "Lease"]
