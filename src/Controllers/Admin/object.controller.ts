import * as ObjectModel from '#models/company.models'

export const getObjects = async (_req, res) => {
    const result = await ObjectModel.get();

    res.status(200).json({
        objects: result
    })
};

export const createObject = async (req, res) => {
    const result = await ObjectModel.create(req.body);

    res.status(200).json({
        objects: result
    })
};