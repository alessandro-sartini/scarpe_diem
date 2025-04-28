import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import CheckoutForm from "../components/CheckoutForm";
import Loader from "../components/Loader";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key");

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, setCartToLocal } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCartToLocal();
  }, []);

  const handleOrderCompletion = async (formData, isFattSameOfSped) => {
    setIsLoading(true);

    const dataToSend = {
      nome: formData.name,
      cognome: formData.surname,
      email: formData.email,
      telefono: formData.tel,
      indirizzo_spedizione: `${formData.indirizzosped}, ${formData.city}, ${formData.cap}`,
      indirizzo_pagamento: isFattSameOfSped
        ? `${formData.indirizzosped}, ${formData.city}, ${formData.cap}`
        : `${formData.indirizzofatt}, ${formData.cityfatt}, ${formData.capfatt}`,
      coupon: formData.coupon ? formData.coupon : null,
      carrello: cart.map((item) => ({
        id: item.id,
        size_id: item.size_id,
        prezzo: item.price,
        quantita: item.selectedQuantity,
      })),
    };

    try {
      const response = await fetch("http://localhost:3000/products/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'elaborazione dell'ordine");
      }

      const result = await response.json();
      console.log("Ordine completato:", result);
      navigate("/checkout/order-completed");
    } catch (error) {
      console.error("Errore durante l'invio dell'ordine:", error);
      alert("Errore durante l'invio dell'ordine. Riprova.");
    } finally {
      setIsLoading(false); // Corrected to stop the loader after the operation
    }
  };

  // const handleStripePayment = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:3000/api/products/create-stripe-session", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ carrello: cart }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Errore nella creazione della sessione di pagamento");
  //     }

  //     const { sessionId } = await response.json();
  //     const stripe = await stripePromise;
  //     await stripe.redirectToCheckout({ sessionId });
  //   } catch (error) {
  //     console.error("Errore durante il pagamento con Stripe:", error);
  //     alert("Si è verificato un errore durante il pagamento. Riprova.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <Loader isLoading={isLoading} />
      <main className="main-checkout">
        <section className="checkout-header">
          <h1 className="h1">Completa Ordine</h1>
        </section>
        <OrderSummary cart={cart} />
        <CheckoutForm onSubmit={handleOrderCompletion} />
        {/* <section className="checkout-payment">
          <button className="btn btn-primary" onClick={handleStripePayment}>
            Paga con Stripe
          </button>
        </section> */}
      </main>
    </>
  );
}