import express from 'express'
import routes from './routes.js'

const app = express() 

//indicar que o express vai usar json para rotas update e post
app.use(express.json()) 

//usar o routes
app.use(routes) 

export default app