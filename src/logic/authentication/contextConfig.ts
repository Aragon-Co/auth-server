import { ExpressContext } from 'apollo-server-express'

const getServerContext = (expressContext: ExpressContext) => {
	const context = {
		req: expressContext.req,
		user: expressContext.req.user,
	}
	return context
}

export default getServerContext
