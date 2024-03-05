import { Response, Request } from 'express';

export function listCategories(req: Request, res: Response) {
  return res.send('Ok!');
}
