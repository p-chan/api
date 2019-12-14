import express from 'express'

import identifications from '../data/identifications.json'

const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.json(identifications)
}

const controller = {
  index
}

export { controller }