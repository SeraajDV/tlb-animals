import { useQuery } from "@tanstack/react-query";
import { getAnimals } from "../api/animals";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["animals"],
    queryFn: () => getAnimals("dog"),
  })
  return(
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
