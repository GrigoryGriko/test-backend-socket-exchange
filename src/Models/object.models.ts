import { clientDB } from "#databasedatabase.service";

const tabName = 'Object';

export const get = async () => {
    return await clientDB[tabName].findMany();
};

export const create = async (data) => {
    return await clientDB[tabName].create({
        data: data
    });
}