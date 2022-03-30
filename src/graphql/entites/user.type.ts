import { Prop, getModelForClass } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { MutationResult } from './common'

@ObjectType()
export class User {
	@Field()
	readonly _id: string

	@Field({ nullable: false })
	@Prop({ unique: true })
	username!: string

	@Field({ nullable: false })
	@Prop()
	firstName!: string

	@Field({ nullable: false })
	@Prop()
	lastName!: string

	@Field({ nullable: false })
	@Prop()
	email!: string

	@Field({ nullable: false })
	@Prop()
	locale!: string

	@Field({ nullable: false })
	@Prop()
	provider!: string

	@Field({ nullable: false })
	@Prop()
	picture!: string

	@Field((type) => [String], { nullable: false })
	@Prop({ type: [String] })
	scopes!: string[]

	@Field({ nullable: false })
	@Prop()
	createdDateTimeUTC!: string

	@Field({ nullable: false })
	@Prop()
	updatedDateTimeUTC!: string
}

@ObjectType()
export class UserResult extends MutationResult {
	@Field((type) => User)
	user?: User
}

export const UserModel = getModelForClass(User)
