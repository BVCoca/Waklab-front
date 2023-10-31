import "./styles/globals.css"
import Header from "./components/header/header"
import SearchAll from "./components/search/searchAll"
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
      'number' : 796
    },
    {
      'icon' : <LogoDungeons width={40} height={60} />,
      'label' : 'Donjons',
      'number' : 69
    },
    {
      'icon' : <LogoStuffs width={60} height={60} />,
      'label' : 'Equipements',
      'number' : 7114
    },
    {
      'icon' : <LogoResources width={60} height={60} />,
      'label' : 'Ressources',
      'number' : 1895
    }
  ]

  return (
    <div id="content">
      <Header small={false}/>
      <div className="statsContainer">
        {stats.map((stat, index) => (
          <Count key={`stat-${index}`} label={stat.label} number={stat.number} icon={stat.icon} duration={1}/>
        ))}
      </div>
      <SearchAll/>
    </div>
  )
}
