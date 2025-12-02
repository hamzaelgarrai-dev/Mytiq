export default function EventInfo({ title, description, date, location, capacity }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Practical Info */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Informations pratiques</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">📅 {date}</li>
          <li className="flex items-center gap-2">📍 {location}</li>
          <li className="flex items-center gap-2">🎟️ {capacity} places disponibles</li>
        </ul>
      </div>
    </div>
  );
}