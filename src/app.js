import express from 'express'
import paymentRouter from './routers/payments.router.js'

const app = express()

app.use('/api', paymentRouter)
app.use(express.static('./src/public'))

app.listen(8080, () => console.log('Server Up!'))