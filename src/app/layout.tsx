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
          <a id="logo" className="logosvg" href="#">
            <img src={"/logo_menu.png"} alt="Logo Menu" style={{width: "30px"}}/>
          </a>
          <a id="ressources" className="logosvg" href="#">
            <img src="/logoResources.svg" alt="Logo Ressources" />
          </a>
          <a id="stuffs" className="logosvg" href="#">
            <img src="/logoStuffs.svg" alt="Logo Stuffs" />
          </a>
          <a id="mobs" className="logosvg" href="#">
            <img src="/logoMobs.svg" alt="Logo Mobs" />
          </a>
          <a id="cac" className="logosvg" href="#">
            <img src="/logoCaC.svg" alt="Logo CaC" />
          </a>
        </div>
      {children}
    </main>
  )
}
