import Container from 'typedi'
import passport from 'passport'
import passportGoogle from 'passport-google-oauth20'
import GoogleProfile from './GoogleProfile'
import UserService from '../user/UserService'

const useGoogleStrategy = () => {
	const GoogleStrategy = passportGoogle.Strategy
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: '/authenticate/google/callback',
			},
			async (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
				try {
					const googleProfile = Container.get(GoogleProfile).mapProfile(profile)

					const userProfile = await Container.get(UserService).getOrCreate(googleProfile)

					return done(null, { id: userProfile.id, email: userProfile.email })
				} catch (err) {
					return done(err, profile)
				}
			}
		)
	)
}

export default useGoogleStrategy
