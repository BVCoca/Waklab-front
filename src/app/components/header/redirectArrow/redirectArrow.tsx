import Logo from "../logo/logo";
import arrow from "/public/arrow.svg"
import Image from "next/image"
import Link from "next/link";
import "./redirectArrow.css"

export default function RedirectArrow() {
    return (
        <header>
            <div className="containerRedirectBack">
                <Link href="/mobs">
                <div className="redirectBack">
                    <Image src={arrow} alt="Flèche Retour en arrière" width={50} height={40}/>
                    <p>Retour à la recherche</p>
                </div>
                </Link>
            </div>
            <Logo width={200} height={100}/>
        </header> 
    )
}