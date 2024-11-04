import { Link } from "@tanstack/react-router";
import { AnimalType } from "../types/animals.type";

export default function AnimalCard({ animal }: { animal: AnimalType }) {
  return (
    <div className="flex w-5/6 flex-col rounded bg-gray-500 p-2 md:w-1/6">
      <h2 className="text-lg">{animal.name}</h2>
      <Link
        to={`/animal/${animal.name}`}
        className="my-1 rounded-xl bg-gray-700 p-2 text-center hover:bg-gray-600"
      >
        View Details
      </Link>
    </div>
  );
}
