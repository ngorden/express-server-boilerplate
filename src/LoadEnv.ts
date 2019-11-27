import { config } from 'dotenv'
import cmdLineArgs from 'command-line-args'

const options = cmdLineArgs([
    {
        name: 'env',
        alias: 'e',
        defaultValue: 'production',
        type: String
    }
])

const envResult = config({ path: `./env/${options.env}.env` })

if (envResult.error) {
    throw envResult.error
}
