import "./styles/globals.css"
import "./styles/menu.css"

export default function Menu({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="pageContent">
          <div id="menuContainer">
              <a id="logo" className="logosvg" href="#">
                <img src={"/logo_menu.png"} alt="Logo Menu" style={{width: "30px"}}/>
              </a>
              <a id="logoRessources" className="logosvg" href="#">
                <img src="/logoResources.svg" alt="Logo Ressources" />
              </a>
              <a id="logoStuffs" className="logosvg" href="#">
                <img src="/logoStuffs.svg" alt="Logo Stuffs" />
              </a>
              <a id="logoMobs" className="logosvg" href="#">
                <img src="/logoMobs.svg" alt="Logo Mobs" />
              </a>
              <a id="logoCac" className="logosvg" href="#">
                <img src="/logoCaC.svg" alt="Logo CaC" />
              </a>
            </div>
            {children}
          </div>
      </body>
    </html>
  )
}
