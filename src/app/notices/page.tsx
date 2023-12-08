import Header from "../components/header/header";
import NoticesText from "./notices/NoticesText";
import Twitter from "@/app/icons/homepageIcon/twitter.svg"

export default function Notices() {

    return (
        <>
            <Header small={false}/>
            <NoticesText/>
            <div className="box">
                <a href="https://twitter.com/WakLaboratory"><Twitter className="twitterLink" style={{width: "50px"}}/></a>
            </div>
            <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLaboratory&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>
        </>
    )
  }