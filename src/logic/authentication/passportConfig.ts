import * as passport from 'passport'
import webServerConfig from '../../config'
import useGoogleStrategy from './useGoogleStrategy'

const configurePassport = () => {
	passport.serializeUser<any, any>((req: any, user: any, done: (err: any, id?: any) => void) => {
		done(null, user)
	})

	passport.deserializeUser((obj: any, done: (err: any, id?: any) => void) => {
		done(null, obj)
	})

	if (!webServerConfig.googleAuthDisabled) useGoogleStrategy()
}

export default configurePassport
