import { Request, Response } from 'express';

export const getEvent = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("Hello World");
}