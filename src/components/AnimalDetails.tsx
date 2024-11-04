import {
  IconArrowLeft,
  IconBookmark,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { getAnimals } from "../api/animals";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Route } from "../routes/animal/$animal";
import { useAnimalsStore } from "../store/useAnimalsStore";

export default function AnimalDetails() {
  const { animalDetails, setAnimalDetails, updateCharacteristicLike } =
    useAnimalsStore();
  const [savedAnimals, setSavedAnimals] = useLocalStorage("savedAnimals", []);
  const { animal } = Route.useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["animal", animal],
    queryFn: async () => getAnimals(animal),
    select: (data) => {
      const newAnimal = data.map((item) => {
        return {
          ...item,
          characteristics: Object.entries(item.characteristics).reduce(
            (acc, [key, value]) => {
              acc[key] = {
                value: value,
                like: "none",
              };
              return acc;
            },
            {},
          ),
        };
      });
      return newAnimal;
    },
  });

  useEffect(() => {
    if (data) {
      setAnimalDetails(data);
    }
  }, [data, setAnimalDetails]);

  const handleLike = (characteristicKey, isLike) => {
    const currentLike =
      animalDetails[0].characteristics[characteristicKey].like;
    let newLikeState;
    if (isLike) {
      newLikeState = currentLike === true ? "none" : true;
    } else {
      newLikeState = currentLike === false ? "none" : false;
    }
    updateCharacteristicLike(characteristicKey, newLikeState);
  };

  const handleSaveAnimal = () => {
    if (!animalDetails) return;

    const isAlreadySaved = savedAnimals.some(
      (saved) => saved[0].name === animalDetails[0].name,
    );

    if (!isAlreadySaved) {
      setSavedAnimals([...savedAnimals, animalDetails]);
    }
  };

  const isAnimalSaved =
    animalDetails &&
    savedAnimals.some((saved) => saved[0].name === animalDetails[0].name);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  if (data) {
    const { name, taxonomy, locations, characteristics } = data[0];
    return (
      <div className="overflow-x-hidden p-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-400">
            <IconArrowLeft size={20} />
            <p>Back to home</p>
          </Link>
          <button
            onClick={handleSaveAnimal}
            className={`flex items-center gap-2 rounded-md px-4 py-2 ${
              isAnimalSaved
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isAnimalSaved}
          >
            <IconBookmark size={20} />
            {isAnimalSaved ? "Saved" : "Save Animal"}
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <h1 className="text-3xl">{name}</h1>
          <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
            <div className="col-span-1 row-start-1 h-fit rounded-md bg-slate-700 p-2">
              <h2 className="text-2xl">Taxonomy</h2>
              {taxonomy &&
                Object.entries(taxonomy).map(([key, value]) => (
                  <p key={key}>
                    <span className="text-gray-400">{key}:</span> {value}
                  </p>
                ))}
            </div>
            <div className="h-fit rounded-md bg-slate-700 p-2 md:col-span-1 md:row-start-2">
              <h2 className="text-2xl">Locations</h2>
              {locations &&
                locations.map((location, i) => <p key={i}>{location}</p>)}
            </div>
            <div className="rounded-md bg-slate-700 p-2 md:col-span-2 md:row-span-2">
              <h2 className="text-2xl">Characteristics</h2>
              {characteristics &&
                Object.entries(characteristics).map(
                  ([key, { value, like }]) => (
                    <div key={key}>
                      <p>
                        <span className="text-gray-400">{key}</span>: {value}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLike(key, true)}
                          className={`${
                            like === true ? "text-green-500" : ""
                          } hover:text-green-400`}
                        >
                          <IconThumbUp size={20} />
                        </button>
                        <button
                          onClick={() => handleLike(key, false)}
                          className={`${
                            like === false ? "text-red-500" : ""
                          } hover:text-red-400`}
                        >
                          <IconThumbDown size={20} />
                        </button>
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
