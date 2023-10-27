"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchMobs } from "@/app/services/mob"
import MobSearch from "@/app/types/Mob/MobSearch"

export default function SearchMobs() {

    const onSearch = async (value : string, page : number) : Promise<MobSearch> => {
        return await searchMobs(value, page) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch}/>
        </div> 
    )
}