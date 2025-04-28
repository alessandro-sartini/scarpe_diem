import "../style/checkout.css"; // Ensure the loader styles are applied

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}