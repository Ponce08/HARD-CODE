import { Response, Request, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  res.json({ Response: `${req.method} and ${req.url}` });
  next();
};

export default logger;
