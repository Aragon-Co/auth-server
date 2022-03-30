import { Router } from 'express'
import { googleAuth, googleAuthCallBack, googleAuthFailure, googleAuthRedirect } from './controllers/auth'

const configureRouter = async (router: Router) => {
	/** Auth Controller */
	router.route('/authenticate/google').get(googleAuth)
	router.route('/authenticate/google/callback').get(googleAuthRedirect, googleAuthCallBack)
	router.route('/authenticate/google/failure').get(googleAuthFailure)

	// router.route('/authenticate/github').get()
	// router.route('/authenticate/github/callback').get()

	// router.route('/authenticate/linkedin').get()
	// router.route('/authenticate/linkedin/callback').get()

	// router.route('/authenticate/linkedin').get()
	// router.route('/authenticate/linkedin/callback').get()

	// router.route('/authenticate/linkedin').get()
	// router.route('/authenticate/linkedin/callback').get()

	/** API Key Controller */
	// router.route('validate-api-key').get(validateApikey)
	// router.route('create-api-key').get(createApiKey)

	return router
}

export default configureRouter
