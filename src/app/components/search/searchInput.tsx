'use client'

import "@/app/styles/globals.css"
import "./search.css"
import React, { ChangeEvent, useState, useEffect } from 'react';
import SearchIcon from "@/app/icons/homepageIcon/search-solid.svg"
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
    valueInput : string
    onChange : Function
}

export default function SearchInput({valueInput, onChange} : Props) {

    const [value, setValue] = useState<string>(valueInput)

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        
        setValue(newValue)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onChange(value)
          }, 500)
      
          return () => clearTimeout(delayDebounceFn)
    }, [value])

    let pathname = usePathname();

    if (pathname.includes("mobs")) {
        pathname = "un monstre";
    } else if(pathname.includes("resources")) {
        pathname = "une ressource";
    } else if(pathname.includes("stuffs")) {
        pathname = "un équipement";
    } else if(pathname.includes("dungeons")) {
        pathname = "un donjons";
    } else {
        pathname = "un monstre, une ressource ou un équipement";
    }

    return (
        <div id="searchbarContainer">
            <input type="text" placeholder={`Rechercher ${pathname}`} id="searchBar" name="searchBar" onChange={handleInputChange} value={value}/>
            <label className="labelSearchInput" htmlFor="searchBar">
                <SearchIcon alt="search icon" id="searchIcon"/>
            </label>
        </div> 
    )
}