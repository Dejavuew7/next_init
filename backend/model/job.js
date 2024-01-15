const mongoose = require("mongoose");
const { Schema } = mongoose;

const newSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  hiring: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    default: false,
  },
  salaryamount: {
    type: String,
    default: false,
  },
  ote: {
    type: String,
    default: false,
  },
  inboundleads: {
    type: Boolean,
    default: false,
  },

  prospecting: {
    type: Boolean,
    default: false,
  },
  average: {
    type: String,
    default: false,
  },
  industry: {
    type: String,
    default: false,
  },
  jobdescription: {
    type: String,
    default: false,
  },
  service: {
    type: Boolean,
    default: false,
  },
  created: {
    type: String,
  },
  expiration: {
    type: String,
  },
  status: {
    type: String,
  },
  companydescription: {
    type: String,
  },
  companyurl: {
    type: String,
  },
  headerimgurl: {
    type: String,
  },
});

const Job = mongoose.model("job", newSchema);
module.exports = Job;
