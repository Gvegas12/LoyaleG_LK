import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app";
import { ThemeProvider } from "./shared/providers/ThemeProvider";
import { NavbarProvider } from "./shared/providers/NavbarProvider";

import "@/shared/assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <NavbarProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </NavbarProvider>
  </BrowserRouter>
);
