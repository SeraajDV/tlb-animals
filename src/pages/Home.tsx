import AnimalCard from "../components/AnimalCard";
import SearchForm from "../components/SearchForm";
import { useAnimalsStore } from "../store/useAnimalsStore";
import { AnimalType } from "../types/animals.type";

export default function Home() {
  const { animals } = useAnimalsStore();
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden p-5">
      <h1 className="text-3xl">Welcome to TLB Animals</h1>
      <h2 className="text-xl">
        Search, explore and save your favourite animals
      </h2>
      <SearchForm />
      <div className="mt-5 flex w-full flex-wrap justify-center gap-5">
        {animals?.map((animal: AnimalType) => (
          <AnimalCard key={animal.name} animal={animal} />
        ))}
      </div>
    </div>
  );
}
