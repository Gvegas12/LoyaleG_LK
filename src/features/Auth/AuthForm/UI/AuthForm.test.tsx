import { render, screen } from "@testing-library/react";
import { AuthForm } from "./AuthForm";

describe("AuthForm", () => {
  test("Test render with title", () => {
    render(<AuthForm title="title AuthForm">Test AuthForm</AuthForm>);
    expect(screen.getByText("title AuthForm")).toBeInTheDocument();
    expect(screen.getByText("Test AuthForm")).toBeInTheDocument();
  });
});
