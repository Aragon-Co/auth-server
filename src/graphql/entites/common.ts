import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class Paging {
	@Field((type) => Int)
	page: number

	@Field((type) => Int)
	pageSize: number
}

@ObjectType()
export class MutationResult {
	@Field()
	message?: string

	@Field((type) => Int)
	success: boolean
}
