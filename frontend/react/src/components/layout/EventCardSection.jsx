import { Calendar, MapPin, User } from "lucide-react";

const EventCardSection = () => {
    const events = [
        {
            title: "Festival Mawazine 2025",
            description: "Le plus grand festival de musique du Maroc revient avec une programmation internationale. Artistes Internationaux.",
            category: "music",
            date: "20 Juin 2025 à 20:00",
            location: "Rabat, Morocco",
            places: 37500,
            price: "350 MAD",
            image: "https://www.nrjmaroc.com/sites/default/files/styles/wide/public/2024-07/crea-article-2024-07-08t101053.220.png?itok=jR0VX1zq",
        },
        {
            title: "Morocco Tech Summit",
            description: "Conférence internationale sur la technologie et l'innovation. Rencontrez les leaders de l'industrie tech.",
            category: "technologie",
            date: "15 Mars 2025 à 09:00",
            location: "Casablanca, Morocco",
            places: 1144,
            price: "500 MAD",
            image: "https://www.moroccoworldnews.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-08-at-2.47.05-PM.webp",
        },
        {
            title: "Comédie Night Show",
            description: "Soirée stand-up avec les meilleurs humoristes marocains. Rires garantis !",
            category: "comédie",
            date: "10 Février 2025 à 21:00",
            location: "Marrakech, Morocco",
            places: 77,
            price: "250 MAD",
            image: "https://www.ccu.be/wp-content/uploads/2023/11/Miloudi-Comedy-Club-450x450.jpg",
        },
        {
            title: "Marathon de Casablanca",
            description: "Course internationale à travers les rues de Casablanca. 42km de défi et de découverte.",
            category: "sport",
            date: "5 Avril 2025 à 07:00",
            location: "Casablanca, Morocco",
            places: 1800,
            price: "150 MAD",
            image: "https://moov.ma/wp-content/uploads/2025/06/mic.jpeg",
        },
        {
            title: "Exposition Art Contemporain",
            description: "Découvrez les œuvres des plus grands artistes contemporains marocains et internationaux.",
            category: "art",
            date: "12 Mai 2025 à 10:00",
            location: "Rabat, Morocco",
            places: 755,
            price: "80 MAD",
            image: "https://i.ytimg.com/vi/8MC21dn17bs/maxresdefault.jpg",
        },
        {
            title: "Festival Gnaoua Essaouira",
            description: "Festival de musique Gnaoua et musiques du monde à Essaouira.",
            category: "music",
            date: "28 Juin 2025 à 19:00",
            location: "Essaouira, Morocco",
            places: 6100,
            price: "250 MAD",
            image: "https://mylittlekech.com/wp-content/uploads/2022/05/Le-Festival-Gnaoua-dEssaouira-fait-son-retour-2022.jpg",
        },
    ];

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

    const EventCard = ({ event }) => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:shadow-xl duration-300 border border-gray-100">
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x250/374151/ffffff?text=${event.title.split(" ").slice(0, 2).join("+")}`;
                    }}
                />
                <span
                    className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold uppercase text-white rounded-full ${getCategoryStyles(event.category)} shadow-md`}
                >
                    {event.category}
                </span>
            </div>

            <div className="p-4 flex flex-col justify-between h-auto min-h-[220px]">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{event.description}</p>

                    <div className="space-y-1 text-sm text-gray-600 mb-2">
                        <p className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 opacity-80" style={{ color: customBlue }} />
                            <span className="text-xs">{event.date}</span>
                        </p>
                        <p className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 opacity-80" style={{ color: customBlue }} />
                            <span className="text-xs">{event.location}</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-xs text-gray-400 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="font-medium">{event.places.toLocaleString("fr-FR")} places disponibles</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-xl" style={{ color: customBlue }}>
                        {event.price}
                    </span>
                    <button
                        style={{ backgroundColor: customBlue }}
                        className="text-white px-5 py-2 rounded-lg font-medium text-sm transition duration-300 shadow-md"
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = customBlueHover)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = customBlue)}
                    >
                        Réserver
                    </button>
                </div>
            </div>
        </div>
    );

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
