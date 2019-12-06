import { NextFunction, Request, Response } from 'express'
import { json, urlencoded } from 'body-parser'

import apiRouter from './routes/api'

import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(json({ limit: '1mb' }))
app.use(urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.use((_req, _res, next) => next(createError(404)))

interface IError extends Error {
    status: number
}
app.use((err: IError, req: Request,
    res: Response, _next: NextFunction) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.send('Error')
})

export default app
