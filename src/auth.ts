import type { Request, Response, NextFunction, RequestHandler  } from 'express'
import dotenv from 'dotenv'
dotenv.config()

export const auth: RequestHandler = async (req, res, next) =>  {
  const token = req.headers.auth
  if (!token) {
    res.status(401).json({ message: 'No token provided' })
    return
  }
  if (token !== process.env.JWT_SECRET) {
    res.status(401).json({ message: 'Invalid token' })
    return
  }
  next()
}