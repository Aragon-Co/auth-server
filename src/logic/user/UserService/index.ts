import { Service } from 'typedi'
import { UserInput } from '../../../graphql/entites/user.input'
import UserRepository from '../../../repositories/UserRepository'

@Service()
export default class UserService {
	constructor(private userRepository: UserRepository) {}

	async create(user: UserInput) {
		return this.userRepository.create(user)
	}

	async getOrCreate(user: UserInput) {
		return this.userRepository.getOrCreate(user)
	}

	async getByUserName(username: string) {
		return this.userRepository.getByUserName(username)
	}

	async getById(id: string) {
		return this.userRepository.getById(id)
	}

	async getTotal() {
		return this.userRepository.getTotal()
	}

	async update(user, id, updatedUser) {
		return this.userRepository.update(user, id, updatedUser)
	}

	async getAll(limit: number, offset: number) {
		return this.userRepository.getAll(limit, offset)
	}
}
