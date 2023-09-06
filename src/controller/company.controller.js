import { createCompany, getCompany, getCompanyDetails } from "../service/company.service.js";

export const createCompanyHandler = async (req, res) => {
  try {
    console.log(req.body);
    const company = await createCompany(req.body);
    return res.send(company);
  } catch (e) {
    // log.error(e);
    return res.status(409).send(e.message);
  }
};

export const getCompanyHandler = async (req, res) => {
  try {
    const company = await getCompany();
    return res.json({ company });
  } catch (e) {
    // log.error(e);
    return res.status(409).send(e.message);
  }
};

export const getCompanyDetailsHandler = async(req, res)=>{
  try {
    const companyDetails = await getCompanyDetails(req.params.id)
    console.log(companyDetails);
    return res.json({ company : companyDetails });

  } catch (error) {
    console.log(error);
    return res.status(409).send(e.message);
    
  }
}
