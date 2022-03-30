const webServerConfig = {
	port: process.env.PORT || 4000,
	webUrl: process.env.WEB_URL,
	cacheAddr: process.env.CACHEADDR,
	mongoAddr: process.env.MONGOADDR,
	mongoDataStore: process.env.MONGO_DATA_STORE,

	googleAuthDisabled: process.env.GOOGLE_AUTH_DISABLED === 'true',
	googleClientId: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

	jwtSecret: process.env.JWT_SECRET,
	jwtAccessKey: process.env.JWT_ACCESS_KEY,
	jwtRefeshKey: process.env.JWT_REFRESH_KEY,

	isDevelopment: process.env.NODE_ENV === 'development',
	httpsDisabled: process.env.HTTPS_DISABLED === 'true',
	credentials: {
		key: process.env.HTTPS_KEY,
		cert: process.env.HTTPS_CERT,
		ca: process.env.HTTPS_CA,
	},
}

export const loadConfig = async () => webServerConfig

export default webServerConfig
