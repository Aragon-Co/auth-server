import { Service } from 'typedi'
import { Arg, Query, Resolver } from 'type-graphql'
import { User } from '../entites/user.type'
import UserRepository from '../../repositories/UserRepository'

@Service()
@Resolver()
export default class UserResolver {
	constructor(private userRepository: UserRepository) {}

	@Query((returns) => User)
	async getUser(@Arg('id') id: string): Promise<User> {
		return this.userRepository.getById(id)
	}
}
