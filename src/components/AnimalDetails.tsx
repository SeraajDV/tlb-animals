import { Route } from "../routes/animal/$animal";

export default function AnimalDetails() {
  const { animal } = Route.useParams();
  return <div>AnimalDetails - {animal}</div>;
}
