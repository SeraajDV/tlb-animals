import axios from "axios";

export async function getAnimals(animal: string) {
  const response = await axios.get(`/api?name=${animal}`, {
    headers: {
      "X-Api-Key": import.meta.env.VITE_API_KEY,
    },
  });
  return response.data;
}
