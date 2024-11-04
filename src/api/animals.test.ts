import axios from "axios";
import { describe, it, beforeEach, expect, vi } from "vitest";
import { getAnimals } from "./animals";
import { mock } from "node:test";

vi.mock("axios");

const mockAxios = vi.mocked(axios, true);

describe("Animals API", () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  })

  describe('getAnimals', () => {
    it("should return a list of animals", async () => {
      const animalsMock = [[{ name: "cat" }], [{ name: "dog" }]];

      mockAxios.get.mockResolvedValueOnce({ data: animalsMock });
      const animals = await getAnimals("dog");

      expect(mockAxios.get).toHaveBeenCalledWith("/api?name=dog", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        }
      });

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(animals).toEqual(animalsMock);
    })
  })
});
