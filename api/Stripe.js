import { headers } from 'next/headers';
import 'server-only'
import Stripe from 'stripe'

const Stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(){
    try{
        const headersList = await headers()
        const origin = headersList.get('origin')

        const session = await stripe.checkout.session.create({
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