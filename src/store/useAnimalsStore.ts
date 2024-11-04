import { create } from "zustand";

export const useAnimalsStore = create((set) => ({
  animals: [],
  setAnimals: (data: any) => set({ animals: data }),
  animalDetails: [],
  setAnimalDetails: (data: any) => set({ animalDetails: data }),
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
