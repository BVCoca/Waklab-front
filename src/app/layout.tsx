import "./styles/globals.css";
import "./styles/menu.css";
import Menu from "./components/menu/menu";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waklab",
  description: "Outils communautaires autour du jeu wakfu",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
      </head>
      <body>
        <main>
          <div id="pageContent">
            <div id="menuContainer">
              <Menu />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
