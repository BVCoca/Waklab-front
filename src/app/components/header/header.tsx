import "@/app/styles/globals.css"
import Search from "./search/search"
import Logo from "./logo/logo"

export default function Header() {
    return (
        <header>
            <Logo width={350} height={110}/>
            <Search />
        </header> 
    )
}