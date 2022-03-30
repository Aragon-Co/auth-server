import { Service } from 'typedi'
import { utc } from 'moment'
import { UserInput } from '../../graphql/entites/user.input'
import { UserModel } from '../../graphql/entites/user.type'

@Service()
export default class UserRepository {
	async create(user: UserInput) {
		const utcTimeStamp = utc().toISOString()

		return UserModel.create({
			...user,
			createdDateTimeUTC: utcTimeStamp,
			updatedDateTimeUTC: utcTimeStamp,
			scopes: [],
		})
	}

	async getOrCreate(user: UserInput) {
		const existingUser = await UserModel.findOne({ email: user.email, provider: user.provider })

		if (existingUser === null) return this.create(user)

		return existingUser
	}

	async getByUserName(username: string) {
		return UserModel.findOne({ username })
	}

	async getById(id: string) {
		return UserModel.findById(id)
	}

	async getTotal() {}

	async update(user, id, updatedUser) {}

	async getAll(limit: number, offset: number) {}
}
