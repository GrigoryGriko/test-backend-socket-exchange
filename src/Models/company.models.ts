import { clientDB } from "#database/database.service";

const tabName = 'Company';

export const get = async () => {
    return await clientDB[tabName].findMany();
};

export const create = async (data) => {
    return await clientDB[tabName].create({
        data: data
    });
}