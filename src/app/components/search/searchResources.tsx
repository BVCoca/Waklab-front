"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchResources } from "@/app/services/resource"
import Resourcesearch from "@/app/types/Resource/ResourceSearch"
import { SortField, SortOrder } from "@/app/types/Search"

export default function SearchResources() {

    const onSearch = async (value : string, page : number, sort_field? : SortField, sort_order? : SortOrder) : Promise<Resourcesearch> => {
        return await searchResources(value, page, sort_field, sort_order) 
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

