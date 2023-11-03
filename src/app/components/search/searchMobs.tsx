"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchMobs } from "@/app/services/mob"
import MobSearch from "@/app/types/Mob/MobSearch"
import { SortField, SortOrder } from "@/app/types/Search"

export default function SearchMobs() {

    const onSearch = async (value : string, page : number, sort_field? : SortField, sort_order? : SortOrder) : Promise<MobSearch> => {
        return await searchMobs(value, page, sort_field, sort_order) 
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