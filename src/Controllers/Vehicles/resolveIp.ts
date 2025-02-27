import type { Request, Response } from 'express';

export const resolveIp = (req: Request, res: Response): void => {
	if (req.headers['x-forwarded-for']) {
		res.status(200).json({
			ip: req.headers['x-forwarded-for']
		});
		return;
	}
	if (req.headers['host']) {
		res.status(200).json({
			ip: req.headers['host']
		});
		return;
	}
	res.status(400).json({
		errorMessage: 'Bad Request'
	});
};