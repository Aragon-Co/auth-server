import { Field, InputType } from 'type-graphql'

@InputType()
export class UserInput {
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
}
