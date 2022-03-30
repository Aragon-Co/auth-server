import migrateMongose from 'migrate-mongoose-typescript'
import { loadConfig } from './config'

const run = async () => {
	console.log('Loading Config...')
	const config = await loadConfig()
	console.log('Done')

	// eslint-disable-next-line
	const migrator = new migrateMongose({ dbConnectionUri: config.mongoAddr, typescript: true, autosync: true })

	await migrator.run()

	return 0
}

run()
	.then((x) => {
		console.log('Completed successfully.')
		process.exit(0)
	})
	.catch((err) => {
		if (err.message === 'There are no migrations to run') {
			console.log(err.message)
			process.exit(0)
		} else console.log('err', err)
		process.exit(1)
	})
