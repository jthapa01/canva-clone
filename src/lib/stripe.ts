import Stripe from "stripe";
import { types } from "util";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia",
    typescript: true,
});