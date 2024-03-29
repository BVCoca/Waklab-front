"use client";

import "@/app/styles/globals.css";
import "./menu.css";
import LogoMobs from "@/app/icons/homepageIcon/logoMobs.svg";
import LogoStuffs from "@/app/icons/homepageIcon/logoStuffs.svg";
import LogoResources from "@/app/icons/homepageIcon/logoResources.svg";
import LogoDungeons from "@/app/icons/homepageIcon/logoDungeon.svg";
import LogoBoussole from "@/app/icons/homepageIcon/logoBoussole.svg";
import LogoCraft from "@/app/icons/homepageIcon/logoHammer.svg"
import Link from "next/link";
import Image from "next/image";
import Coffee from "@/app/components/coffee/coffee";
import { usePathname } from "next/navigation";
import Info from "../modal/Info";

export default function Menu() {
  const current_page = usePathname();

  let isOnPageColor = "#34D6D3";

  const params = [
    {
      src: <LogoMobs />,
      srcOnPage: <LogoMobs style={{ color: `${isOnPageColor}` }} />,
      alt: ``,
      href: `/mobs`,
      label: "Monstres",
    },
    {
      src: <LogoDungeons />,
      srcOnPage: <LogoDungeons style={{ color: `${isOnPageColor}` }} />,
      alt: ``,
      href: `/dungeons`,
      label: "Donjons",
    },
    {
      src: <LogoStuffs />,
      srcOnPage: <LogoStuffs style={{ color: `${isOnPageColor}` }} />,
      alt: ``,
      href: `/stuffs`,
      label: "Équipements",
    },
    {
      src: <LogoResources />,
      srcOnPage: <LogoResources style={{ color: `${isOnPageColor}` }} />,
      alt: ``,
      href: `/resources`,
      label: "Ressources",
    },
    {
      src: <LogoBoussole />,
      srcOnPage: <LogoBoussole style={{ color: `${isOnPageColor}` }} />,
      alt: ``,
      href: `/subzones`,
      label: "Zones",
    },
    {
      src: <LogoCraft />,
      srcOnPage: <LogoCraft style={{ color: `${isOnPageColor}`}} />,
      alt: ``,
      href: `/crafts`,
      label: "Crafts",
    }
    
  ];

  return (
    <div id="menu">
      <Link href="/" className="menuWrapper">
        <Image
          className="logoMenu"
          src="/homepageIcon/logo_home.svg"
          alt=""
          width={160}
          height={50}
        />
        <div className="menuDesc">Accueil</div>
      </Link>
      {params &&
        params.map((param, index) => {
          return (
            <Link className="menuWrapper" key={index} href={param.href}>
              {current_page.includes(param.href) ? (
                <div className="logoMenu">{param.srcOnPage}</div>
              ) : (
                <div className="logoMenu">{param.src}</div>
              )}
              <div className="menuDesc">{param.label}</div>
            </Link>
          );
        })}
      <Coffee/>
      <Info />
    </div>
  );
}
