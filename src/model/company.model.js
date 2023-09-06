import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    package: { type: Number },
    stipened: { type: Number },
    eligibility: [{ type: String }],
    files: { type: String },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);

export default Company;
