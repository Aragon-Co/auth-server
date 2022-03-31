import * as path from 'path'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import resolvers from './resolvers'

export default () =>
	buildSchema({
		resolvers,
		emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
		container: Container,
	})
