import "./styles/globals.css"
import Header from "./components/header/header"
import Count from "./components/header/count"
import LogoMobs from "@/app/icons/homepageIcon/logoMobs.svg";
import LogoStuffs from "@/app/icons/homepageIcon/logoStuffs.svg";
import LogoResources from "@/app/icons/homepageIcon/logoResources.svg";
import LogoDungeons from "@/app/icons/homepageIcon/logoDungeon.svg";

export default function Page() {

  const stats = [
    {
      'icon' : <LogoMobs width={60} height={60} />,
      'label' : 'Monstres',
      'number' : 796,
      'href' : '/mobs'
    },
    {
      'icon' : <LogoDungeons width={40} height={60} />,
      'label' : 'Donjons',
      'number' : 104,
      'href' : '/dungeons'
    },
    {
      'icon' : <LogoStuffs width={60} height={60} />,
      'label' : 'Equipements',
      'number' : 7114,
      'href' : '/stuffs'
    },
    {
      'icon' : <LogoResources width={60} height={60} />,
      'label' : 'Ressources',
      'number' : 1895,
      'href' : '/resources'
    }
  ]

  return (
    <div className="homepageContainer">
      <Header small={false}/>
      <div className="statsContainer">
        {stats.map((stat, index) => (
          <Count key={`stat-${index}`} label={stat.label} number={stat.number} icon={stat.icon} duration={1} href={stat.href}/>
        ))}
      </div>
      <div className="descriptionHome">
        <h2>Bienvenue sur Waklab,</h2>
        <p>Le site est encore en cours de développement, nous nous excusons pour la gêne occasionnée. Vous pouvez commencer une recherche en cliquant sur une des icônes ci-dessus. Si vous voyez des erreurs ou des choses à améliorées, il y a un formulaire diponible en haut à droite de votre page. Voila ce que nous avons prévue d&apos;ajouter : </p>
        <ul>
          <li>Zones et sous zones du jeu</li>
          <li>Pages de métiers</li>
          <li>Fonctionnalité de stasis sur les donjons</li>
          <li>Ergonomie mobile</li>
        </ul>
        <h3>Merci pour votre visite et bon jeu =)</h3> 
      </div>
    </div>
  )
}
