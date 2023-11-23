import { loadStripe } from "@stripe/stripe-js";

const stripePublicKey: string = (process.env.REACT_APP_STRIPE_PUBLIC_KEY as string )

export const stripePromise = loadStripe(stripePublicKey);
