const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { basket, email } = req.body;
    const items = basket.map(item => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'JPY',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    }))

    try {



        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_rates: ['shr_1JPrsbITcDOr0HWodyeVBT4e'],
            shipping_address_collection: {
                allowed_countries: ['GB', 'US', 'CA', 'QA']
            },
            line_items: items,
            mode: 'payment',
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/`,
            metadata: {
                email,
                images: JSON.stringify(basket.map(item => item.image))
            }
        });
    } catch (e) {
        console.log("ERROR", e)
    }

    res.status(200).json({ id: session.id })
}