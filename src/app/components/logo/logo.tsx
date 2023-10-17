import "../../styles/globals.css"
import "./logo.css"
import logo from "../../../../public/logo_home.svg"
import Image from "../../../../node_modules/next/image"

export default function Logo() {
    return (
        <div id="logoContainer">
            <Image src={logo} alt="Logo WakLab" />
        </div> 
    )
}