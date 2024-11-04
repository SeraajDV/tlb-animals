import { create } from 'zustand';
import { AnimalType } from '../types/animals.type';

interface AnimalsStore {
  animals: AnimalType[];
  setAnimals: (animals: AnimalType[]) => void;
}

export const useAnimalsStore = create<AnimalsStore>((set) => ({
  animals: [],
  setAnimals: (animals: AnimalType[]) => set({ animals }),
}))