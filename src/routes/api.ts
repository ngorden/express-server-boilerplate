import { Router } from 'express'

const router = Router()

router.get('/v1', (_, res) => res.send('Server Api'))

export default router
