export default function OrderSummary({ cart }) {
  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.selectedQuantity,
    0
  );
  const shippingCost = orderTotal > 300 ? 0 : 20;
  const finalTotal = orderTotal + shippingCost;

  return (
    <section className="checkout-form-section riepilogo-section">
      <h2 className="h2">Riepilogo Ordine</h2>
      <div className="riepilogo-products-box">
        {cart.map((product) => {
          const { id, name, selectedQuantity, selectedSize, price } = product;
          const productTotal = price * selectedQuantity;
          return (
            <div key={id} className="riepilogo-product-info-box">
              <span className="text-big">{name}</span>
              <div className="riepilogo-product-info">
                <span>Taglia</span>
                <span>{selectedSize}</span>
              </div>
              <div className="riepilogo-product-info">
                <span>Qt.</span>
                <span>x{selectedQuantity}</span>
              </div>
              <div className="riepilogo-product-info">
                <span>Tot. Parziale</span>
                <span className="text-big">€{productTotal.toFixed(2)}</span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="riepilogo-products-box total-box vertical-layout">
        <div className="riepilogo-product-info">
          <span>Totale prodotti:</span>
          <span>€{orderTotal.toFixed(2)}</span>
        </div>
        <div className="riepilogo-product-info">
          <span>Costi di spedizione:</span>
          <span className={orderTotal > 300 ? "strikethrough" : ""}>
            €{shippingCost.toFixed(2)}
          </span>
        </div>
        <div className="riepilogo-product-info">
          <span>Totale ordine:</span>
          <span>€{finalTotal.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}