import 'reflect-metadata'
import Container from 'typedi'
import GoogleProfile from './index'

const mockProfile = {
	id: '11321321321312312321312',
	displayName: 'Joe Smith',
	name: { familyName: 'Smith', givenName: 'Joe' },
	emails: [{ value: 'joesmith@gmail.com', verified: true }],
	photos: [
		{
			value: 'https://lh3.googleusercontent32e41432121321',
		},
	],
	provider: 'google',
	_raw:
		'{\n' +
		'  "sub": "11321321321312312321312",\n' +
		'  "name": "Joe Smith",\n' +
		'  "given_name": "Joe",\n' +
		'  "family_name": "Smith",\n' +
		'  "picture": "https://lh3.googleusercontent32e41432121321",\n' +
		'  "email": "JoeSmith@gmail.com",\n' +
		'  "email_verified": true,\n' +
		'  "locale": "en"\n' +
		'}',
	_json: {
		sub: '11321321321312312321312',
		name: 'Joe Smith',
		given_name: 'Joe',
		family_name: 'Smith',
		picture: 'https://lh3.googleusercontent32e41432121321',
		email: 'JoeSmith@gmail.com',
		email_verified: true,
		locale: 'en',
	},
}

describe('GoogleProfile', () => {
	describe('Map Profile to Google Profile', () => {
		it('Should map profile to google profile', () => {
			const googleProfile = Container.get(GoogleProfile).mapProfile(mockProfile)

			expect(googleProfile.firstName).toEqual('Joe')
		})
	})
})
