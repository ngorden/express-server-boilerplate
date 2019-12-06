import { copySync, existsSync, removeSync } from 'fs-extra'
import { exec } from 'child_process'
import { join } from 'path'

try {
    // Remove existing dist files
    removeSync('./dist')

    const publicDir = join(__dirname, '..', 'src', 'public')
    const viewsDir = join(__dirname, '..', 'src', 'views')

    // Copy static files
    if (existsSync(publicDir)) {
        copySync(publicDir, publicDir.replace('src', 'dist'))
    }
    if (existsSync(viewsDir)) {
        copySync(viewsDir, viewsDir.replace('src', 'dist'))
    }

    exec('tsc --build tsconfig.json')
} catch (err) {
    console.error(err)
    process.exit(1)
}
