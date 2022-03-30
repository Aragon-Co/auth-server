import 'reflect-metadata'
import * as dotenv from 'dotenv'
/* eslint-disable import/first */
dotenv.config()

import https from 'https'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'

import buildSchema from './graphql'
import webServerConfig, { loadConfig } from './config'
import { getCorsMiddleware, getJwtMiddleware } from './middleware/securityMiddleware'
import configurePassport from './logic/authentication/passportConfig'
import getServerContext from './logic/authentication/contextConfig'
import configureRouter from './router'

export const server = async () => {
	await loadConfig()

	const app = express()

	const router = await configureRouter(express.Router())

	const schema = await buildSchema()

	const apolloServer = new ApolloServer({ schema, context: getServerContext })

	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())

	app.use(passport.initialize())

	app.use(cookieParser())

	app.use(router)

	app.use(
		getCorsMiddleware({
			credentials: true,
			origin: webServerConfig.isDevelopment ? '*' : webServerConfig.webUrl,
			optionsSuccessStatus: 200,
		})
	)

	app.use(
		'/graphql',
		getJwtMiddleware({
			secret: webServerConfig.jwtSecret,
			credentialsRequired: false,
			algorithms: ['HS256'],
		})
	)

	configurePassport()

	await apolloServer.start()

	apolloServer.applyMiddleware({ app })

	mongoose.connect(webServerConfig.mongoAddr)

	const webServer = webServerConfig.httpsDisabled
		? http.createServer(app)
		: https.createServer(webServerConfig.credentials, app)

	webServer.listen(webServerConfig.port, () =>
		console.log(`HTTP${webServerConfig.httpsDisabled ? '' : 'S'}${apolloServer.graphqlPath}`)
	)
}
