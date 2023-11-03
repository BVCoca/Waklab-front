"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchDungeons } from "@/app/services/dungeon"
import DungeonSearch from "@/app/types/Dungeon/DungeonSearch"
import { SortField, SortOrder } from "@/app/types/Search"

export default function SearchDungeons() {

    const onSearch = async (value : string, page : number, sort_field? : SortField, sort_order? : SortOrder) : Promise<DungeonSearch> => {
        return await searchDungeons(value, page, sort_field, sort_order) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch} sortFields={[
                {
                    label : "Trier par pertinence"
                },
                {
                    sort_field : SortField.LEVEL,
                    sort_order : SortOrder.ASC,
                    label : "Trier par niveau croissant"
                },
                {
                    sort_field : SortField.LEVEL,
                    sort_order : SortOrder.DESC,
                    label : "Trier par niveau décroissant"
                }
            ]}/>
        </div> 
    )
}