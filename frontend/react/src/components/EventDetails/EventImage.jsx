export default function EventImage({ image }) {
  return (
    <div className="relative w-full">
      {/* Badge Category */}
      <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
        Music
      </span>

      {/* Image */}
      <img
        src={image}
        alt="Event"
        className="w-full h-72 md:h-96 object-cover rounded-xl shadow"
      />
    </div>
  );
}


