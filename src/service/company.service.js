import Company from "../model/company.model.js";

export async function createCompany(input) {
  try {
    return await Company.create(input);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getCompany() {
  try {
    return await Company.find({}).sort({ createdAt: -1 });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCompanyDetails(id) {
  try {
    return await Company.findById(id)
  } catch (error) {
    throw new Error(error.message);
  }
}
