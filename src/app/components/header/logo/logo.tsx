import "@/app/styles/globals.css"
import "./logo.css"
import logo from "public/homepageIcon/logo_home.svg"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
   width: number;
   height: number
  }

const Logo: React.FC<LogoProps> = ({width, height, }) => {
    return (
        <div id="logoContainer">
            <Link href="/">
                <Image src={logo} alt="Logo WakLab" width={width} height={height} />
            </Link>
        </div>
    )
}

export default Logo;