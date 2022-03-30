import cors from 'cors'
import jwt from 'express-jwt'
import { RequestHandler } from 'express'

export const getCorsMiddleware = (corsOptions: cors.CorsOptions): RequestHandler => cors(corsOptions)

export const getJwtMiddleware = (jwtOptions: jwt.Options): RequestHandler => jwt(jwtOptions)
