import { loadStripe } from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHIBALE_KEY)
    }

    return stripePromise
}

export default getStripe;

// This code prevents loading Stripe every single time and slowing down the website