import "@/app/styles/globals.css"
import "./menu.css"
import MenuIcon from "./menuIcon/menuIcon"
import MenuDesc from "./menuDesc/menuDesc"

export default function Menu() {
    
    let srcLink = "/homepageIcon/logo"

    const params = [
        {src:`${srcLink}_menu.png`, alt:``, href:`/`, label: ''},
        {src:`${srcLink}Resources.svg`, alt:``, href:`/resources`, label: 'Ressources'},
        {src:`${srcLink}Mobs.svg`, alt:``, href:`/mobs`, label: 'Monstres'},
        {src:`${srcLink}Stuffs.svg`, alt:``, href:`/stuffs`, label: 'Équipements'}     
    ]

    return (
        params && params.map((param, index) => {
            return (
                <div className="menuWrapper" key={index}>
                    <MenuIcon 
                        src={param.src} 
                        alt={param.alt} 
                        href={param.href}
                    />
                    <MenuDesc 
                        descIcon={param.label}
                    />
                </div>
            )
        })
    )
}