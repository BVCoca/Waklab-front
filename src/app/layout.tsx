import Link from "next/link"
import "./styles/globals.css"
import "./styles/menu.css"
import Image from "next/image"

export default function Menu({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
      <div id="menuContainer">
        <Link id="logo" className="logosvg" href="/">
          <Image  src={"/logo_menu.png"} alt="Logo Menu" width={40} height={50}/>
        </Link>
          <a id="ressources" className="logosvg" href="#">
            <Image src="/logoResources.svg" alt="Logo Ressources" width={40} height={50} />
          </a>
          <a id="stuffs" className="logosvg" href="#">
          <Image src="/logoStuffs.svg" alt="Logo Stuffs" width={40} height={50}/>
          </a>
          <Link href="/mobs" id="mobs" className="logosvg">
            <Image src="/logoMobs.svg" alt="Logo Mobs" width={40} height={50}/>
          </Link>
          <a id="cac" className="logosvg" href="#">
            <Image src="/logoCaC.svg" alt="Logo CaC" width={40} height={50}/>
          </a>
        </div>
      {children}
    </main>
  )
}
