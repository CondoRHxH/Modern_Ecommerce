import { loadStripe } from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }
    if (!stripePromise) {
    console.error("Stripe Publishable Key is missing from environment variables.");
    return null;
  }

    return stripePromise
}

export default getStripe;

// This code prevents loading Stripe every single time and slowing down the website