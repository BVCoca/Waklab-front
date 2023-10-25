"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchStuffs } from "@/app/services/stuff"
import StuffSearch from "@/app/types/Stuff/StuffSearch"

export default function SearchStuffs() {

    const onSearch = async (value : string, page : number) : Promise<StuffSearch> => {
        return await searchStuffs(value, page) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch}/>
        </div> 
    )
}