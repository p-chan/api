import express from 'express'

import { identification } from '../data/index'

const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.json(identification)
}

const controller = {
  index
}

export { controller }
