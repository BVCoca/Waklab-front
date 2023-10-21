import "@/app/styles/globals.css"
import MenuIcon from "./menuIcon/menuIcon"
import MenuDesc from "./menuDesc/menuDesc"

export default function Menu() {
    
    let srcLink = "/homepageIcon/logo"
    let altName = "Logo "

    const params = [
        {src:`${srcLink}_menu.png`, alt:`${altName}Menu`, href:`/`},
        {src:`${srcLink}Resources.svg`, alt:`${altName}Resources`, href:`/resources`},
        {src:`${srcLink}Mobs.svg`, alt:`${altName}Mobs`, href:`/mobs`},
        {src:`${srcLink}CaC.svg`, alt:`${altName}CaC`, href:`/cac`},
        {src:`${srcLink}Stuffs.svg`, alt:`${altName}Stuffs`, href:`/stuffs`}     
    ]

    return (
        params && params.map((param, index) => {
            return (
                <div key={index}>
                    <MenuIcon src={param.src} alt={param.alt} href={param.href}/>
                    <MenuDesc />
                </div>
            )
        })
    )
}