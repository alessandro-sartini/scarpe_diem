import { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    indirizzosped: "",
    city: "",
    cap: "",
    indirizzofatt: "",
    cityfatt: "",
    capfatt: "",
    coupon: "",
  });
  const [isFattSameOfSped, setIsFattSameOfSped] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsFattSameOfSped(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, isFattSameOfSped);
  };

  return (
    <section className="checkout-form-section">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="checkout-form-container">
          <h2 className="h2">Dettagli spedizione</h2>
          <div className="checkout-form-box">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Franco"
              className="checkout-form-input"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="surname">Cognome</label>
            <input
              type="text"
              name="surname"
              placeholder="Rossi"
              className="checkout-form-input"
              value={formData.surname}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="franco.rossi@example.com"
              className="checkout-form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="tel">Telefono</label>
            <input
              type="tel"
              name="tel"
              placeholder="1234567890"
              className="checkout-form-input"
              value={formData.tel}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="indirizzosped">Indirizzo di Spedizione</label>
            <input
              type="text"
              name="indirizzosped"
              placeholder="Via Roma 1"
              className="checkout-form-input"
              value={formData.indirizzosped}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="city">Città</label>
            <input
              type="text"
              name="city"
              placeholder="Milano"
              className="checkout-form-input"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label htmlFor="cap">CAP</label>
            <input
              type="text"
              name="cap"
              placeholder="20100"
              className="checkout-form-input"
              value={formData.cap}
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout-form-box">
            <label>
              <input
                type="checkbox"
                checked={isFattSameOfSped}
                onChange={handleCheckboxChange}
              />
              La fatturazione coincide con la spedizione
            </label>
          </div>
          {!isFattSameOfSped && (
            <>
              <h2 className="h2">Dettagli fatturazione</h2>
              <div className="checkout-form-box">
                <label htmlFor="indirizzofatt">Indirizzo di Fatturazione</label>
                <input
                  type="text"
                  name="indirizzofatt"
                  placeholder="Via Garibaldi 10"
                  className="checkout-form-input"
                  value={formData.indirizzofatt}
                  onChange={handleInputChange}
                />
              </div>
              <div className="checkout-form-box">
                <label htmlFor="cityfatt">Città</label>
                <input
                  type="text"
                  name="cityfatt"
                  placeholder="Roma"
                  className="checkout-form-input"
                  value={formData.cityfatt}
                  onChange={handleInputChange}
                />
              </div>
              <div className="checkout-form-box">
                <label htmlFor="capfatt">CAP</label>
                <input
                  type="text"
                  name="capfatt"
                  placeholder="00100"
                  className="checkout-form-input"
                  value={formData.capfatt}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          <div className="checkout-form-box">
            <label htmlFor="coupon">Codice Coupon</label>
            <input
              type="text"
              name="coupon"
              placeholder="Inserisci il codice coupon"
              className="checkout-form-input"
              value={formData.coupon}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="checkout-form-box">
          <button className="btn btn-accent">Completa ordine</button>
        </div>
      </form>
    </section>
  );
}