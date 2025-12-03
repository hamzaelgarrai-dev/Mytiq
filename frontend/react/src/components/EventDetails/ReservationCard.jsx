export default function ReservationCard({ price, remaining, capacity, onBuy }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full h-fit border">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-2 text-gray-800">Réservation</h3>
      <p className="text-gray-500 mb-4">Achetez vos billets maintenant</p>

      {/* Price */}
      <div className="flex justify-between items-center mb-4 p-3 bg-gray-100 rounded-lg">
        <span className="text-gray-700 font-semibold">Prix :</span>
        <span className="text-xl font-bold text-blue-600">{price} MAD</span>
      </div>

      {/* Availability */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm">Places disponibles :</p>
        <p className="text-lg font-bold text-gray-800">{remaining} / {capacity}</p>
      </div>

      {/* Buy Button */}
      <button
        onClick={onBuy}
        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mb-4"
      >
        Acheter un billet
      </button>

      {/* Perks List */}
      <ul className="text-sm text-gray-600 space-y-2 mt-2">
        <li>✔️ Confirmation immédiate par email</li>
        <li>✔️ Billet PDF téléchargeable</li>
        <li>✔️ QR Code sécurisé</li>
        <li>✔️ Support client disponible</li>
      </ul>
    </div>
  );
}