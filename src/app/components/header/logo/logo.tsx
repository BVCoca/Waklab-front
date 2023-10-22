import "@/app/styles/globals.css"
import "./logo.css"
import HomeIcon from "@/app/icons/homepageIcon/logo_home.svg"
import Link from "next/link"
import Image from "next/image";

interface LogoProps {
   width: number;
   height: number
  }

const Logo: React.FC<LogoProps> = ({width, height, }) => {
    return (
        <div id="logoContainer">
            <Link href="/">
                <Image src="/homepageIcon/logo_home.svg" alt="Logo WakLab" width={width} height={height} />
            </Link>
        </div>
    )
}

export default Logo;