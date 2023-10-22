import "./styles/globals.css";
import "./components/menu/menu.css";
import Menu from "./components/menu/menu";

import type { Metadata } from "next";
import Script from "next/script";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Waklab",
  description: "Outils communautaires autour du jeu wakfu",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="analytics"
          dangerouslySetInnerHTML={{
            __html: `var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.xixidev.fr/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();`,
          }}
        />
      </head>
      <body className={roboto.className}>
        <main id="pageContent">
          <div id="menuContainer">
            <Menu />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
