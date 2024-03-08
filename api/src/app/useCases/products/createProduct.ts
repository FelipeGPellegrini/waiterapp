import { Response, Request } from 'express';

import { Product } from '../../models/Product';

export async function createCategory(req: Request, res: Response) {
  try {


    res.json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
