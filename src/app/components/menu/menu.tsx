'use client'

import "@/app/styles/globals.css"
import "./menu.css"
import LogoMobs from "@/app/icons/homepageIcon/logoMobs.svg"
import LogoStuffs from "@/app/icons/homepageIcon/logoStuffs.svg"
import LogoResources from "@/app/icons/homepageIcon/logoResources.svg"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Menu() {

    const current_page = usePathname()

    let isOnPageColor = "#34D6D3"

    const params = [
        {src:<LogoResources/> , srcOnPage: <LogoResources style={{color: `${isOnPageColor}`}}/>, alt:``, href:`/resources`, label: 'Ressources'},
        {src: <LogoMobs/>, srcOnPage: <LogoMobs style={{color: `${isOnPageColor}`}}/>, alt:``, href:`/mobs`, label: 'Monstres'},
        {src:<LogoStuffs/>, srcOnPage: <LogoStuffs style={{color: `${isOnPageColor}`}}/>, alt:``, href:`/stuffs`, label: 'Équipements'}     
    ]
    
    return (
        <div id="menuContainer">
            <Link href="/">
                <Image  src="/homepageIcon/logo_waklab.png" alt="" width={60} height={60}/>
            </Link>
            {params && params.map((param, index) => {
                return (
                    <Link className="menuWrapper" key={index} href={param.href}>
                        {current_page.includes(param.href) 
                            ?
                            <div className="logoMenu">{param.srcOnPage}</div>
                            : 
                            <div className="logoMenu">{param.src}</div>
                        }
                        <div className="menuDesc">{param.label}</div>
                    </Link>
                )
            })}
        </div>   
    )
}