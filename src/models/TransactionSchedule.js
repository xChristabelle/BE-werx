import mongoose from "mongoose";

const TransactionScheduleSchema = new mongoose.Schema({
  name: String, 
  transactionId: String,
  company: {
    id: String,
    name: String
  },
  title: String,
  summary: String,
  location: String,
  timezone: String,
  startDate: Date,
  recurring: String,
  taskType: String,
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

const TransactionSchedule = mongoose.model("TransactionSchedule", TransactionScheduleSchema);
export default TransactionSchedule;

// ["Listing", "Purchase", "Lease"]