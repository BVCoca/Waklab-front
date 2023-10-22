import "@/app/styles/globals.css"
import "./menu.css"
import LogoMobs from "@/app/icons/homepageIcon/logoMobs.svg"
import LogoStuffs from "@/app/icons/homepageIcon/logoStuffs.svg"
import LogoResources from "@/app/icons/homepageIcon/logoResources.svg"
import Link from "next/link"
import Image from "next/image"

export default function Menu() {

    const params = [
        {src:<LogoResources/> , alt:``, href:`/resources`, label: 'Ressources'},
        {src: <LogoMobs/>, alt:``, href:`/mobs`, label: 'Monstres'},
        {src:<LogoStuffs/>, alt:``, href:`/stuffs`, label: 'Équipements'}     
    ]

    return (
        <div id="menuContainer">
            <Link href="/">
                <Image  src="/homepageIcon/logo_menu.png" alt="" width={50} height={60}/>
            </Link>
            {params && params.map((param, index) => {
                return (
                    <Link className="menuWrapper" key={index} href={param.href}>
                        <div className="logoMenu">{param.src}</div>
                        <div className="menuDesc">{param.label}</div>
                    </Link>
                )
            })}
        </div>   
    )
}