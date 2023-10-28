"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchDungeons } from "@/app/services/dungeon"
import DungeonSearch from "@/app/types/Dungeon/DungeonSearch"

export default function SearchDungeons() {

    const onSearch = async (value : string, page : number) : Promise<DungeonSearch> => {
        return await searchDungeons(value, page) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch}/>
        </div> 
    )
}