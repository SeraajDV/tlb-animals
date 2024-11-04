import { createFileRoute } from "@tanstack/react-router";
import Animal from "../../pages/Animal";

export const Route = createFileRoute("/animal/$animal")({
  component: Animal,
});
