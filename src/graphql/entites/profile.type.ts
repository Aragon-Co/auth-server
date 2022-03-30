import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UserProfile {
	@Field({ nullable: false })
	id: string

	@Field({ nullable: false })
	username!: string

	@Field({ nullable: false })
	firstName!: string

	@Field({ nullable: false })
	lastName!: string

	@Field({ nullable: false })
	email!: string

	@Field({ nullable: false })
	locale!: string

	@Field({ nullable: false })
	provider!: string

	@Field({ nullable: false })
	picture!: string

	@Field((type) => [String], { nullable: false })
	scopes!: string[]

	@Field({ nullable: false })
	createdDateTimeUTC!: string

	@Field({ nullable: false })
	updatedDateTimeUTC!: string
}
