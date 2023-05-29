import { render, screen } from "@testing-library/react";
import { TelegramChat } from "./TelegramChat";

describe("TelegramChat", () => {
  test("Test render ", () => {
    render(<TelegramChat />);
    expect(screen.getByTestId("telegramchat")).toBeInTheDocument();
  });
});
