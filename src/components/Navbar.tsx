import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-5 font-sans">
      <Link
        to="/"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        <h1 className="text-xl font-bold">TLB Animals</h1>
      </Link>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/favourites"
          activeProps={{
            className: "font-bold",
          }}
        >
          Favourites
        </Link>
      </div>
    </div>
  );
}
