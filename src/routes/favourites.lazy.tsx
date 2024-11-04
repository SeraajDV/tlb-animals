import { createLazyFileRoute } from "@tanstack/react-router";
import Favourites from "../pages/Favourites";

export const Route = createLazyFileRoute("/favourites")({
  component: Favourites,
});
