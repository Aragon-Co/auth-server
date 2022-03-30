import { Service } from 'typedi'
import GoogleMapper from '../GoogleProfile'

@Service()
export default class AuthenticationService {
	constructor(private googleMapper: GoogleMapper) {}

	async authenticate() {}

	async validateToken() {}

	async refreshToken() {}

	async logout() {
		// tokenManager.getTokenPayload
		// tokenManager.revokeActiveToken
	}
}
