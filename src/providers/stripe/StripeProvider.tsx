import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Получаем публичный ключ Stripe из переменных окружения
const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";

// Инициализация Stripe с публичным ключом
const stripePromise = STRIPE_PUBLISHABLE_KEY
  ? loadStripe(STRIPE_PUBLISHABLE_KEY)
  : null;

interface StripeProviderProps {
  children: React.ReactNode;
}

/**
 * StripeProvider - оборачивает приложение для предоставления доступа к Stripe
 *
 * ВАЖНО: Этот провайдер нужен только если вы используете React-компоненты Stripe
 * (Elements, PaymentElement, CardElement и т.д.) во всем приложении.
 *
 * Если Stripe нужен только на определенных страницах (например, страница оплаты),
 * лучше использовать Elements локально только там, где нужно.
 */
const StripeProvider = ({ children }: StripeProviderProps) => {
  // Если ключ не указан, просто возвращаем children без обертки
  if (!stripePromise) {
    console.warn(
      "Stripe publishable key is not set. Add VITE_STRIPE_PUBLISHABLE_KEY to your .env file"
    );
    return <>{children}</>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        // Базовые опции для Elements
        // Эти опции можно переопределить в конкретных компонентах
        appearance: {
          theme: "stripe" as const,
        },
      }}
    >
      {children}
    </Elements>
  );
};

export default StripeProvider;
