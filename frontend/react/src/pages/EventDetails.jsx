import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EventImage from "../components/EventDetails/EventImage";
import EventInfo from "../components/EventDetails/EventInfo";
import EventPriceBox from "../components/EventDetails/EventPriceBox";
import ReservationCard from "../components/EventDetails/ReservationCard";

// Données statiques avec image Cloudinary
const STATIC_EVENT = {
  id: 1,
  title: "Festival Mawazine 2025",
  description: "Le Festival Mawazine 2025 est la 20e édition de ce grand festival de musique qui s'est déroulé à Rabat et Salé du 20 au 28 juin 2025. Il a présenté une programmation riche et éclectique avec des artistes internationaux, arabes et marocains.",
  date: "20 Juin 2025 à 20:00",
  location: "Rabat, Morocco",
  capacity: 50000,
  remaining: 37500,
  price: 350,
  // Remplacez cette URL par votre URL d'image Cloudinary réelle
  image_url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
};

export default function EventDetails({ isAuthenticated }) {
  const { eventId } = useParams();
  // On utilise directement les données statiques
  const event = STATIC_EVENT;

  const [ticketInfo, setTicketInfo] = useState(null);
  const [buying, setBuying] = useState(false);

  const handleBuyTicket = async () => {
    // Vérification de l'authentification (US3)
    if (!isAuthenticated) return alert("Veuillez vous connecter pour acheter un billet !");

    setBuying(true);
    // Simulation d'achat (à connecter au backend plus tard)
    setTimeout(() => {
      setTicketInfo({
        ticket_pdf_url: "#",
        qrcode_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TicketMawazine2025"
      });
      alert("Billet acheté avec succès !");
      setBuying(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      {/* Bouton retour */}
      <button className="text-gray-600 mb-4 hover:text-blue-600 flex items-center gap-2 transition-colors">
        <span>&larr;</span> Retour aux événements
      </button>

      <div className="md:flex md:gap-8">
        {/* Colonne principale : Image et Informations */}
        <div className="md:flex-1 space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <EventImage image={event.image_url} />
          </div>

          <EventInfo
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            capacity={event.capacity}
          />

          {/* Affichage du prix et bouton d'achat (Mobile/Tablette ou en bas de page) */}
          <div className="md:hidden">
            <EventPriceBox
              price={event.price}
              onBuy={handleBuyTicket}
              isAuthenticated={isAuthenticated && !buying}
            />
          </div>
        </div>

        {/* Colonne latérale : Réservation (Sticky sur Desktop) */}
        <div className="hidden md:block md:w-1/3">
          <div className="sticky top-24 space-y-6">
            <ReservationCard
              price={event.price}
              remaining={event.remaining}
              capacity={event.capacity}
              onBuy={handleBuyTicket}
            />

            {/* Zone de téléchargement du billet après achat */}
            {ticketInfo && (
              <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold">Achat confirmé !</h3>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img src={ticketInfo.qrcode_url} alt="QR Code" className="w-32 h-32 mix-blend-multiply" />
                  <a
                    href={ticketInfo.ticket_pdf_url}
                    className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2"
                  >
                    Télécharger votre billet (PDF)
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section Prix pour Mobile (Sticky Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-100 z-50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Prix total</span>
          <span className="text-xl font-bold text-blue-600">{event.price} MAD</span>
        </div>
        <button
          onClick={handleBuyTicket}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
        >
          Acheter un billet
        </button>
      </div>
    </div>
  );
}
