import * as passport from 'passport'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import webServerConfig from '../config'

export const googleAuth = passport.authenticate('google', {
	scope: ['profile', 'email'],
})

export const googleAuthRedirect = passport.authenticate('google', {
	failureRedirect: '/authenticate/google/failure',
})

export const googleAuthCallBack = (req: Request, res: Response) => {
	console.log('Loggin success')

	const accessToken = jwt.sign(req.user, webServerConfig.jwtAccessKey, {
		expiresIn: 60 * 60 * 60,
	})

	const refreshToken = jwt.sign(req.user, webServerConfig.jwtRefeshKey, {
		expiresIn: 60 * 60 * 60,
	})

	res.redirect(`http://localhost:4000?accessToken=${accessToken}&refreshToken=${refreshToken}`)
}

export const googleAuthFailure = async (req: Request, res: Response) => {
	console.log('Loggin failure')

	res.redirect('http://localhost:4000/failure')
}
