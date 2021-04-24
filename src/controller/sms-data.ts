import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { AccountModel } from '../models/account-model';
import { parse } from 'dotenv/types';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;
const account = new AccountModel


/**
 * Get account by accountId.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getAccountById(req: Request, res: Response) {
    const { id } = req.params;
    const expands = req.query['_expand'] as string[];
    const result = await account.getOne(Number(id), expands)
    return res.status(OK).json(result);
}
