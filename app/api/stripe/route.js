import { NextResponse } from 'next/server'; // Darori t-importi hadi!
import { headers } from 'next/headers';
import 'server-only';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const headersList = await headers();
        const origin = headersList.get('origin');

        const body = await req.json();
        const { cartItems } = body;

        // ✅ L-map s7i7a (return l-dakhel)
        const lineItems = cartItems.map((item) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-','https://cdn.stripe.io/images/i84j8yey/production').replace('-webp','.webp');
            
            // 👇 Return khasha tkon HNA l-dakhel dyal map!
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [newImage],
                    },
                    unit_amount: item.price * 100, 
                },
                quantity: item.quantity,
            };
        });

        // ✅ Ztna CHECKOUT_SESSION_ID hna
        const session = await stripe.checkout.sessions.create({
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1TtWpuBr8a9gNlXuRFiW46KL' },
                { shipping_rate: 'shr_1TtsTnBr8a9gNlXuS7jj6jEu' },
            ],
            line_items: lineItems,
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/?canceled=true`,
        });

        return NextResponse.json({ url: session.url });

    } catch (error) {
        console.error("Stripe error", error);
        return NextResponse.json(
            { error: error.message },
            { status: error.statusCode || 500 }
        );
    }
}