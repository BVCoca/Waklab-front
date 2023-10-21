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
      <div id="pageContent">
        <div id="menuContainer">
          <Link id="logo" className="logosvg" href="/">
            <Image  src={"/homepageIcon/logo_menu.png"} alt="Logo Menu" width={50} height={60}/>
          </Link>
          <Link id="ressources" className="logosvg" href="/resources">
            <Image src="/homepageIcon/logoResources.svg" alt="Logo Ressources" width={50} height={60} />
          </Link>
          <Link id="stuffs" className="logosvg" href="/stuffs">
          <Image src="/homepageIcon/logoStuffs.svg" alt="Logo Stuffs" width={50} height={60}/>
          </Link>
          <Link href="/mobs" id="mobs" className="logosvg">
            <Image src="/homepageIcon/logoMobs.svg" alt="Logo Mobs" width={50} height={60}/>
          </Link>
          <Link id="cac" className="logosvg" href="/cac">
            <Image src="/homepageIcon/logoCaC.svg" alt="Logo CaC" width={50} height={60}/>
          </Link>
        </div>    
        {children}
      </div>
    </main>
  )
}
