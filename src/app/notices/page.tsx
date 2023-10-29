import Header from "../components/header/header";
import NoticesText from "./notices/NoticesText";

export default function Notices() {

    return (
        <>
            <Header small={false}/>
            <NoticesText/>
            <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLab&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>
        </>
    )
  }