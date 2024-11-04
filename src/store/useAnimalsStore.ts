import { create } from "zustand";

export interface AnimalsStore {
  animals: any[];
  setAnimals: (data: any[]) => void;
  animalDetails: any[];
  setAnimalDetails: (data: any[]) => void;
  updateCharacteristicLike: (characteristicKey: string, newLikeState: string) => void;
}

export const useAnimalsStore = create<AnimalsStore>((set) => ({
  animals: [],
  setAnimals: (data: any[]) => set({ animals: data }),
  animalDetails: [],
  setAnimalDetails: (data: any[]) => set({ animalDetails: data }),
  updateCharacteristicLike: (characteristicKey, newLikeState) =>
    set((state) => ({
      animalDetails: state.animalDetails.map((animal) => ({
        ...animal,
        characteristics: {
          ...animal.characteristics,
          [characteristicKey]: {
            ...animal.characteristics[characteristicKey],
            like: newLikeState,
          },
        },
      })),
    })),
}));

