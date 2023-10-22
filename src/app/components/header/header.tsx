import "./header.css"
import Logo from "./logo/logo"
import RedirectArrow from "./redirectArrow/redirectArrow"

interface Props {
    small? : boolean 
}

export default function Header({small = true } : Props) {

    let width = 350;
    let height = 110;

    if(small) {
        width = 150
        height = 40
    }

    return (
        <header className="header">
            <RedirectArrow />
            <Logo width={width} height={height}/>
        </header> 
    )
}