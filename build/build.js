import { exec } from 'child_process'
import { copySync, removeSync } from 'fs-extra'

try {
    // Remove existing dist files
    removeSync('./dist')

    // Copy static files
    copySync('./src/public', './dist/public')

    exec('tsc --build tsconfig.json')
} catch (err) {
    console.error(err)
    process.exit(1)
}
