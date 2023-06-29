import Stripe from 'stripe'
import { config } from 'dotenv'
config()

const stripe = new Stripe(process.env.STRIPE_PK)

export const checkout = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Refri Inteligente',
                        description: 'Refrigerador con 16Gb de RAM'
                    },
                    currency: 'usd',
                    unit_amount: 200000    //USD 2,000
                },
                quantity: 1
            },
            {
                price_data: {
                    product_data: {
                        name: 'Mesa de Comedor',
                        description: 'Awesome mesa de comedor'
                    },
                    currency: 'usd',
                    unit_amount: 50000    //USD 500
                },
                quantity: 2
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:8080/api/success',
        cancel_url: 'http://localhost:8080/api/cancel',
    })
    return res.json(session)
}