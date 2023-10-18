'use client'

import "../../styles/globals.css"
import "./search.css"
import searchIcon from "../../../../public/search-solid.svg"
import Image from "../../../../node_modules/next/image"
import { usePathname } from 'next/navigation'

export default function Search() {

    let pathname = usePathname();

    if (pathname.includes("mobs")) {
        pathname = "un monstre";
    } else if(pathname.includes("resources")) {
        pathname = "une ressource";
    } else if(pathname.includes("stuffs")) {
        pathname = "un équipement";
    } else {
        pathname = "un monstre, une ressource ou un équipement";
    }

    return (
        <div id="searchbarContainer">
            <input type="text" placeholder={`Rechercher ${pathname}`} id="searchBar" name="searchBar"/>
            <label htmlFor="searchBar"><Image src={searchIcon} alt="search icon" id="searchIcon"/></label>
        </div> 
    )
}