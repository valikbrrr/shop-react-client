import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";

const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";

export const useStripe = () => {
  const stripePromise = useMemo(() => {
    console.log("Stripe key:", STRIPE_PUBLISHABLE_KEY);
    console.log("Key exists:", !!STRIPE_PUBLISHABLE_KEY);
    if (!STRIPE_PUBLISHABLE_KEY) {
      console.warn(
        "Stripe publishable key is not set. Add VITE_STRIPE_PUBLISHABLE_KEY to your .env file"
      );
      return null;
    }
    return loadStripe(STRIPE_PUBLISHABLE_KEY);
  }, []);

  const confirmPayment = async (
    clientSecret: string,
    returnUrl?: string
  ): Promise<{ error?: { message: string; type?: string; code?: string } }> => {
    console.log("Confirming payment with clientSecret:", clientSecret);

    if (!stripePromise) {
      return {
        error: {
          message: "Stripe is not initialized. Please check your configuration.",
        },
      };
    }

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        return {
          error: {
            message: "Failed to load Stripe. Please try again.",
          },
        };
      }

      console.log("Stripe loaded successfully");

      const result = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          return_url: returnUrl || window.location.origin + "/cart",
        },
      });

      console.log("Payment result:", result);

      if (result.error) {
        console.error("Stripe payment error:", result.error);
        return {
          error: {
            message: result.error.message || "Payment failed",
            type: result.error.type,
            code: result.error.code,
          },
        };
      }

      return {};
    } catch (error) {
      console.error("Unexpected error during payment:", error);
      return {
        error: {
          message:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred during payment",
        },
      };
    }
  };

  return { confirmPayment };
};