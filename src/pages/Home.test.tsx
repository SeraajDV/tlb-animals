import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Home", () => {
  it("should render", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    expect(screen.getByText("Welcome to TLB Animals")).toBeDefined();
  });
});

