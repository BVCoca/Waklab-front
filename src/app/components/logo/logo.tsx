import "../../styles/globals.css"
import "./logo.css"
import logo from "../../../../public/logo_home.svg"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <div id="logoContainer">
            <Link href="/">
                <Image src={logo} alt="Logo WakLab" width={350} height={190}/>
            </Link>
        </div> 
    )
}