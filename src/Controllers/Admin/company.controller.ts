import * as CompanyModel from '#models/company.models'

export const getCompanies = async (_req, res) => {
    const result = await CompanyModel.get();

    res.status(200).json({
        companies: result
    })
};

export const createCompanie = async (req, res) => {
    const result = await CompanyModel.create(req.body);

    res.status(200).json({
        objects: result
    })
};