import { Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventCardSection = ({ events = [] }) => {
    const navigate = useNavigate();
    const customBlue = "#6EBAFB";
    const customBlueHover = "#5AA7E8";

    const getCategoryStyles = (category) => {
        switch (category) {
            case "music": return "bg-pink-600";
            case "technologie": return "bg-blue-800";
            case "comédie": return "bg-yellow-600";
            case "sport": return "bg-green-600";
            case "art": return "bg-indigo-600";
            default: return "bg-gray-500";
        }
    };

    const EventCard = ({ event }) => {
        // Valeurs par défaut pour éviter les erreurs
        const {
            id,
            image = `https://placehold.co/400x250/374151/ffffff?text=No+Image`,
            title = "Titre non disponible",
            description = "Description non disponible",
            date = "Date non définie",
            location = "Lieu non défini",
            places = 0,
            price = "Gratuit",
            category = "autre",
        } = event;

        return (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:shadow-xl duration-300 border border-gray-100">
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/400x250/374151/ffffff?text=${title.split(" ").slice(0, 2).join("+")}`;
                        }}
                    />
                    <span
                        className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold uppercase text-white rounded-full ${getCategoryStyles(category)} shadow-md`}
                    >
                        {category}
                    </span>
                </div>

                <div className="p-4 flex flex-col justify-between h-auto min-h-[220px]">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>

                        <div className="space-y-1 text-sm text-gray-600 mb-2">
                            <p className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 opacity-80" style={{ color: customBlue }} />
                                <span className="text-xs">{date}</span>
                            </p>
                            <p className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 opacity-80" style={{ color: customBlue }} />
                                <span className="text-xs">{location}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <User className="h-4 w-4 mr-1" />
                        <span className="font-medium">{places.toLocaleString("fr-FR")} places disponibles</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-xl" style={{ color: customBlue }}>
                            {price}
                        </span>
                        <button
                            style={{ backgroundColor: customBlue }}
                            className="text-white px-5 py-2 rounded-lg font-medium text-sm transition duration-300 shadow-md"
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = customBlueHover)}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = customBlue)}
                            onClick={() => navigate(`/eventdetails/${id}`)}
                        >
                            Réserver
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Événements à venir</h2>
                <span className="text-gray-500 text-sm">{events.length} événements</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </section>
    );
};

export default EventCardSection;

