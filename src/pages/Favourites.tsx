// pages/Favourites.jsx
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import SavedAnimal from "../components/SavedAnimal";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Favourites() {
  const [savedAnimals, setSavedAnimals] = useLocalStorage<any[]>(
    "savedAnimals",
    [],
  );

  const handleRemove = (animalName: string) => {
    setSavedAnimals(
      savedAnimals.filter((animal) => animal[0].name !== animalName),
    );
  };

  if (savedAnimals.length === 0) {
    return (
      <div className="p-5">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-400">
          <IconArrowLeft size={20} />
          <p>Back to home</p>
        </Link>
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">No Saved Animals</h1>
          <p className="mt-2 text-gray-400">
            Start exploring animals and save them to see them here!
          </p>
          <Link
            to="/"
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            Explore Animals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <Link to="/" className="flex items-center gap-2 hover:text-gray-400">
        <IconArrowLeft size={20} />
        <p>Back to home</p>
      </Link>

      <h1 className="mb-6 mt-4 text-2xl font-semibold">Favourite Animals</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedAnimals.map((animal) => (
          <SavedAnimal
            key={animal[0].name}
            animal={animal}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}
