import { Request, Response } from 'express';
import { Maybe, createMaybe, isNone, isSome } from '../../util/maybe';

export const getEvent = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("Hello World");
}