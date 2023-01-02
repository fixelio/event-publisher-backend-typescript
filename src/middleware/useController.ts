import { Request, Response, NextFunction } from 'express';

type ControllerFunction = (req: Request, res: Response, next?: NextFunction) => Promise<Response>;

const useController = (fn: ControllerFunction) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(error => {
  res.status(error.statusCode || 500).json({
    message: error.message || 'Something went wrong',
  });
});

export default useController;