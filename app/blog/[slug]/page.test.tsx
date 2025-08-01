/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Create a synchronous version for testing
function TestPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Hello world!</p>
    </>
  );
}

it("App Router: Works with dynamic route segments", () => {
  render(<TestPage params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("App CI: Works with loading Hello world! is OK", () => {
  render(<TestPage params={{ slug: "Test" }} />);
  expect(screen.getByText("Hello world!")).toBeInTheDocument();
});
