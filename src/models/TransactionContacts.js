import mongoose from "mongoose";

const TransactionContactsSchema = new mongoose.Schema({
  name: String, 
  transactionId: String,
  company: {
    id: String,
    name: String,
  },
  client: {
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    work: String,
    home: String,
  },
  partner: {
    name: String,
    company: String,
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
    phoneNumber: String,
    email: String,
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

const TransactionContacts = mongoose.model("TransactionContacts", TransactionContactsSchema);
export default TransactionContacts;

// ["Listing", "Purchase", "Lease"]