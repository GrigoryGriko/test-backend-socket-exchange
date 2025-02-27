import { PrismaClient } from '@prisma/client';
import colors from 'colors';

export const clientDB = new PrismaClient(/*{log: ['query', 'info', 'warn', 'error']}*/);	//если нужно логировать SQL запросы, то раскомментировать

export const connectToDB = async () => {
	try {
		console.info(colors.yellow('[DATABASE] connection...'));
		await clientDB.$connect();
		console.info(colors.green('[DATABASE] Successful connection'));
	} catch (err) {
		throw new Error(err.message);
	}
};