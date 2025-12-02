import { useState } from "react";
import { Calendar, Music, Smile, Trophy, Palette, Computer } from "lucide-react";

// Couleur personnalisée pour le bouton actif
const customBlue = "#6EBAFB";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("tous");

  const categories = [
    { id: "tous", name: "Tous", Icon: Calendar },
    { id: "music", name: "Musique", Icon: Music },
    { id: "comedie", name: "Comédie", Icon: Smile },
    { id: "sport", name: "Sport", Icon: Trophy },
    { id: "art", name: "Art", Icon: Palette },
    { id: "technologie", name: "Technologie", Icon: Computer },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    console.log(`Filtre activé: ${categoryId}`);
  };

  return (
    <div className="text-center">
      {/* Titre Catégories */}
      <h2 className="text-2xl font-bold mb-6">Catégories</h2>

      {/* Boutons des catégories */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          const CategoryIcon = category.Icon;

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                flex items-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-sm
                ${isActive
                  ? "text-white shadow-lg transform scale-[1.02]"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }
              `}
              style={isActive ? { backgroundColor: customBlue } : {}}
            >
              <CategoryIcon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
