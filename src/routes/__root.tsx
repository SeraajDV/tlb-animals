import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}
