import { Service } from 'typedi'
import { union } from 'lodash'
import { UserProfile } from '../../../graphql/entites/profile.type'
import { OauthProfile } from '../../../graphql/entites/oauth.types'
import BuilderBase from '../../../design-patterns/BuilderBase'

@Service()
export default class UserBuilder extends BuilderBase<UserProfile> {
	constructor() {
		super({
			id: '',
			username: '',
			firstName: '',
			lastName: '',
			email: '',
			locale: '',
			provider: '',
			picture: '',
			createdDateTimeUTC: '',
			updatedDateTimeUTC: '',
			scopes: [],
		})
	}

	private appendScopes(nextScopes: string[]) {
		this.__result.scopes = union(this.__result.scopes, nextScopes)
	}

	setFromUserScopes(userScopes: string[]) {
		this.appendScopes(userScopes)

		return this
	}

	setFromOauthProfile(oauthProfile: OauthProfile) {
		this.__result.username = oauthProfile.username
		this.__result.firstName = oauthProfile.firstName
		this.__result.lastName = oauthProfile.lastName
		this.__result.email = oauthProfile.email
		this.__result.locale = oauthProfile.locale
		this.__result.provider = oauthProfile.provider
		this.__result.picture = oauthProfile.picture

		return this
	}
}
