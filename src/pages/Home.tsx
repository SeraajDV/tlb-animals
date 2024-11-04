import { useQuery } from "@tanstack/react-query";
import { getAnimals } from "../api/animals";
import AnimalCard from "../components/AnimalCard";
import { AnimalType } from "../types/animals.type";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["animals"],
    queryFn: () => getAnimals("dog"),
  });
  return (
    <div className="flex flex-1 flex-col p-5">
      <h1 className="text-3xl">Welcome to TLB Animals</h1>
      <h2 className="text-xl">
        Search, explore and save your favourite animals
      </h2>
      <div className="mt-5 flex w-full flex-wrap justify-center gap-5">
        {data?.map((animal: AnimalType) => (
          <AnimalCard key={animal.name} animal={animal} />
        ))}
      </div>
    </div>
  );
}
