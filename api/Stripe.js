import { headers } from 'next/headers';
import 'server-only'
import Stripe from 'stripe'

const Stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(){
    try{
        const headersList = await headers()
        const origin = headersList.get('origin')

        console.log(req.body.cartItems)
        const session = await stripe.checkout.session.create({
            params : {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection:'auto',
                shipping_options:[
                    {shipping_rate:'shr_1TtWpuBr8a9gNlXuRFiW46KL'},
                    {shipping_rate:'shr_1TtsTnBr8a9gNlXuS7jj6jEu'},
                ]
            },
            line_items: [
                {
                    price:'foundProduct.price',
                    quantity : 1,
                },
            ],
            mode: 'payment',
            success_url : `${origin}/success?session_id={}`,
            cancel_url: `${origin}/?canceled=true`,
    })

    }catch(error){
        console.error("Stripe error",error);
        return NextResponse.json(
            { error:error.message },
            { status:error.statusCode || 500 }
        )
    }
}