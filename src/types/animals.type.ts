import * as z from "zod";

export const CharacteristicsSchema = z.object({
  temperament: z.string(),
  training: z.string(),
  diet: z.string(),
  average_litter_size: z.string(),
  common_name: z.string(),
  slogan: z.string(),
  group: z.string(),
  color: z.string(),
  skin_type: z.string(),
  lifespan: z.string(),
  height: z.string(),
});
export type Characteristics = z.infer<typeof CharacteristicsSchema>;

export const TaxonomySchema = z.object({
  kingdom: z.string(),
  phylum: z.string(),
  class: z.string(),
  order: z.string(),
  family: z.string(),
  genus: z.string(),
  scientific_name: z.string(),
});
export type Taxonomy = z.infer<typeof TaxonomySchema>;

export const AnimalTypeSchema = z.object({
  name: z.string(),
  taxonomy: TaxonomySchema,
  locations: z.array(z.string()),
  characteristics: CharacteristicsSchema,
});
export type AnimalType = z.infer<typeof AnimalTypeSchema>;
