import "@/app/styles/globals.css"
import Link from "next/link"
import Image from "next/image"

interface Props {
    src : string
    alt : string
    href : string
}

export default function MenuIcon({src, alt, href} : Props) {
    return (
        <Link className="logoMenu" href={href}>
            <Image  src={src} alt={alt} width={50} height={60}/>
        </Link>
    )
}