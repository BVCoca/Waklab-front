import "./styles/globals.css";
import Header from "./components/header/header";
import Count from "./components/header/count";
import LogoMobs from "@/app/icons/homepageIcon/logoMobs.svg";
import LogoStuffs from "@/app/icons/homepageIcon/logoStuffs.svg";
import LogoResources from "@/app/icons/homepageIcon/logoResources.svg";
import LogoDungeons from "@/app/icons/homepageIcon/logoDungeon.svg";
import LogoZones from "@/app/icons/homepageIcon/logoBoussole.svg";
import Twitter from "@/app/icons/homepageIcon/twitter.svg"

export default function Page() {
  const stats = [
    {
      icon: <LogoMobs width={60} height={60} />,
      label: "Monstres",
      number: 796,
      href: "/mobs",
    },
    {
      icon: <LogoDungeons width={40} height={60} />,
      label: "Donjons",
      number: 104,
      href: "/dungeons",
    },
    {
      icon: <LogoStuffs width={60} height={60} />,
      label: "Equipements",
      number: 7114,
      href: "/stuffs",
    },
    {
      icon: <LogoResources width={60} height={60} />,
      label: "Ressources",
      number: 1895,
      href: "/resources",
    },
    {
      icon: <LogoZones width={60} height={60} />,
      label: "Zones",
      number: 73,
      href: "/subzones",
    },
  ];

  return (
    <div className="homepageContainer">
      <Header small={false} />
      <div className="statsContainer">
        {stats.map((stat, index) => (
          <Count
            key={`stat-${index}`}
            label={stat.label}
            number={stat.number}
            icon={stat.icon}
            duration={1}
            href={stat.href}
          />
        ))}
      </div>
      <div className="descriptionHome">
        <h2>Bienvenue sur Waklab,</h2>
        <p>
          Le site est encore en cours de développement, nous nous excusons pour
          la gêne occasionnée. Vous pouvez commencer une recherche en cliquant
          sur une des icônes ci-dessus. Si vous voyez des erreurs ou des choses
          à améliorer, il y a un formulaire disponible en haut à droite de votre
          page. Voila ce que nous avons prévu d&apos;ajouter :
        </p>
        <ul>
          <li>Zones et sous zones du jeu (Dimensions, Shushardes et Mont Zinit)</li>
          <li>Outil d'aide aux crafts</li>
          <li>Fonctionnalité de stasis sur les donjons</li>
          <li>Ergonomie mobile</li>
        </ul>
        <h3>Merci pour votre visite et bon jeu =)</h3>
      </div>
      <div>
        <div className="box">
          <a href="https://twitter.com/WakLaboratory" target="_blank"><Twitter className="twitterLink" style={{width: "50px"}}/></a>
        </div>
        <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLaboratory&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>
      </div>
    </div>
  );
}
