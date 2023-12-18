import mongoose from "mongoose";

const TransactionDetailsSchema = new mongoose.Schema({
  userId: String,
  transactionId: String,
  company: {
    id: String,
    name: String
  },
  transactionType: String,
  transactionPhase: String,
  client: String,
  leadCommissionPlan: String,
  cashDeal: Boolean,
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
  salesPrice: String,
  howMuchMoneyHeld: String,
  whereMoneyHeld: String,
  whenMoneyHeldDue: String,
  listedDate: Date,
  listingExpirationDate: Date,
  acceptanceDate: Date,
  homeInspectionContigencyDate: Date,
  appraisalDate: Date,
  loanContigencyDate: Date,
  closing: Date,
  expirationDate: Date,
  TerminationDate: Date,
  downPayment: String,
  MLSNumber: String,
  listingClient: [String],
  transactionState: String,
  municipality: String,
  transactionCounty: String,
  transactionCity: String,
  transactionZip: String,
  propertyTax: String,
  listingPrice: String,
  commissionPercentage: String,
  legalDescription: String,
  sellerName: String,
  buyerName: String,
  sellerPhoneNumber: String,
  sellerEmailAddress: String,
  leadSource: String,
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

const TransactionDetails = mongoose.model("TransactionDetails", TransactionDetailsSchema);
export default TransactionDetails;
