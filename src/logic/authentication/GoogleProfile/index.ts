import { Service } from 'typedi'
import { OauthProfile } from '../../../graphql/entites/oauth.types'
import UserBuilder from '../../user/UserBuilder'

@Service()
export default class GoogleProfile {
	private oauthProfile: OauthProfile

	constructor(private userBuilder: UserBuilder) {
		this.oauthProfile = {
			firstName: '',
			lastName: '',
			picture: '',
			username: '',
			email: '',
			locale: '',
			provider: '',
		}
	}

	mapProfile(profile: any) {
		this.oauthProfile.firstName = String(profile._json.given_name)
		this.oauthProfile.lastName = String(profile._json.family_name)
		this.oauthProfile.picture = String(profile._json.picture)
		this.oauthProfile.username = String(profile._json.email).replace(/@.*$/, '')
		this.oauthProfile.email = String(profile._json.email)
		this.oauthProfile.locale = String(profile._json.locale)
		this.oauthProfile.provider = 'google'

		return this.userBuilder.setFromOauthProfile(this.oauthProfile).build()
	}
}
