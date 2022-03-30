import mongoose from 'mongoose'
import { loadConfig } from '../src/config'

import { UserModel } from '../src/graphql/entites/user.type'
/**
 * Make any changes you need to make to the database here
 */
export async function up() {
	const config = await loadConfig()
	mongoose.connect(config.mongoAddr)

	const user = {
		username: 'testuser',
		firstName: 'testuser',
		lastName: 'testuser',
		email: 'testuser@gmail.com',
		locale: 'us',
		provider: 'google',
		picture: '',
		createdDateTimeUTC: '',
		updatedDateTimeUTC: '',
		scopes: [],
	}

	const result = await UserModel.create(user)

	console.log(`Created test user of id ${result.id}`)
	console.log('Migration complete')
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down() {}
