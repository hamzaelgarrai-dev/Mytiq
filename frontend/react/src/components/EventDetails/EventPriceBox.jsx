export default function EventPriceBox({ price, onBuy, isAuthenticated }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow border">
      {/* Price Row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-700">Prix payé</span>
        <span className="text-xl font-bold text-blue-600">{price} MAD</span>
      </div>

      {/* Button */}
      <button
        onClick={onBuy}
        disabled={!isAuthenticated}
        className={`w-full mt-4 py-3 rounded-lg font-semibold transition
          ${isAuthenticated
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"}
        `}
      >
        Acheter un billet
      </button>

      {/* Message when user is not logged in */}
      {!isAuthenticated && (
        <p className="text-center text-sm text-gray-500 mt-2">
          Vous devez être connecté pour acheter un billet
        </p>
      )}

      {/* Icons list */}
      <ul className="mt-4 text-sm text-gray-600 space-y-1">
        <li>✔️ Confirmation immédiate par email</li>
        <li>✔️ Billet PDF téléchargeable</li>
        <li>✔️ QR Code pour l'entrée</li>
        <li>✔️ Paiement sécurisé</li>
      </ul>
    </div>
  );
}