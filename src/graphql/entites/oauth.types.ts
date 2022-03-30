import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class OauthProfile {
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
