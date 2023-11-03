"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchStuffs } from "@/app/services/stuff"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import { SortField, SortOrder } from "@/app/types/Search"

export default function SearchStuffs() {

    const onSearch = async (value : string, page : number, sort_field? : SortField, sort_order? : SortOrder) : Promise<StuffSearch> => {
        return await searchStuffs(value, page, sort_field, sort_order) 
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
                },
                {
                    sort_field : SortField.RARITY,
                    sort_order : SortOrder.ASC,
                    label : "Trier par rareté croissante"
                },
                {
                    sort_field : SortField.RARITY,
                    sort_order : SortOrder.DESC,
                    label : "Trier par rareté décroissante"
                }
            ]}/>
        </div> 
    )
}