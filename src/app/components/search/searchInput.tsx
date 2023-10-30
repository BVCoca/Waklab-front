'use client'

import "@/app/styles/globals.css"
import "./search.css"
import React, { ChangeEvent } from 'react';
import SearchIcon from "@/app/icons/homepageIcon/search-solid.svg"
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
    valueInput : string
    onChange : Function
}

export default function SearchInput({valueInput, onChange} : Props) {

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;

        // On update l'URL
        window.history.replaceState(null, null, '?q=' + newValue)
        
        onChange(newValue);
    }

    let pathname = usePathname();

    if (pathname.includes("mobs")) {
        pathname = "un monstre";
    } else if(pathname.includes("resources")) {
        pathname = "une ressource";
    } else if(pathname.includes("stuffs")) {
        pathname = "un équipement";
    } 
    else if(pathname.includes("dungeons")) {
        pathname = "un donjons";
    } else {
        pathname = "un monstre, une ressource ou un équipement";
    }

    return (
        <div id="searchbarContainer">
            <input type="text" placeholder={`Rechercher ${pathname}`} id="searchBar" name="searchBar" onChange={handleInputChange} value={valueInput}/>
            <label htmlFor="searchBar">
                <SearchIcon alt="search icon" id="searchIcon"/>
            </label>
        </div> 
    )
}