import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error('❌ Error capturado:', err.message);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message
  });
}
