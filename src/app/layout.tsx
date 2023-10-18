import Link from "next/link"
import "./styles/globals.css"
import "./styles/menu.css"

export default function Menu({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
      <div id="menuContainer">
        <Link id="logo" className="logosvg" href="/">
          <img src={"/logo_menu.png"} alt="Logo Menu" style={{width: "30px"}}/>
        </Link>
          <a id="ressources" className="logosvg" href="#">
            <img src="/logoResources.svg" alt="Logo Ressources" />
          </a>
          <a id="stuffs" className="logosvg" href="#">
            <img src="/logoStuffs.svg" alt="Logo Stuffs" />
          </a>
          <Link href="/mobs" id="mobs" className="logosvg">
            <img src="/logoMobs.svg" alt="Logo Mobs" />
          </Link>
          <a id="cac" className="logosvg" href="#">
            <img src="/logoCaC.svg" alt="Logo CaC" />
          </a>
        </div>
      {children}
    </main>
  )
}
