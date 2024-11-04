import { IconTrash, IconStar } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function SavedAnimal({ animal, handleRemove }) {
  return (
    <div key={animal[0].name} className="rounded-lg bg-slate-700 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{animal[0].name}</h2>
        <button
          onClick={() => handleRemove(animal[0].name)}
          className="text-red-400 hover:text-red-500"
          title="Remove from favourites"
        >
          <IconTrash size={20} />
        </button>
      </div>
      <div className="flex items-center space-x-1">
          {Array.from({ length: animal[0].rating }).map((_, i) => (
            <IconStar key={i} size={20} className="text-yellow-400" />
          ))}
        </div>
      <div className="mt-4 space-y-3">
        {/* Taxonomy Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-300">Taxonomy</h3>
          <div className="mt-1 grid grid-cols-2 gap-2">
            {Object.entries(animal[0].taxonomy).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="text-gray-400">{key}:</span>{" "}
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-300">Locations</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {animal[0].locations.map((location) => (
              <span
                key={location}
                className="rounded-full bg-slate-600 px-2 py-1 text-sm"
              >
                {location}
              </span>
            ))}
          </div>
        </div>

        {/* Characteristics Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-300">Characteristics</h3>
          <div className="mt-1 space-y-2">
            {Object.entries(animal[0].characteristics).map(
              ([key, { value, like }]) => (
                <div key={key} className="text-sm">
                  <div className="flex items-center justify-between">
                    <span>
                      <span className="text-gray-400">{key}:</span>{" "}
                      <span>{value}</span>
                    </span>
                    {like !== "none" && (
                      <span
                        className={`text-xs ${
                          like ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {like ? "Liked" : "Disliked"}
                      </span>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <Link
        to={`/animal/${animal[0].name}`}
        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
