import { Router } from 'express'
import { checkout } from '../controllers/payments.controller.js'

const router = Router()

router.post('/checkout', checkout)
router.get('/success', (req, res) => res.send('success'))
router.get('/cancel', (req, res) => res.send('cancel'))

export default router