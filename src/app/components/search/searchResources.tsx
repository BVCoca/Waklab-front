"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchResources } from "@/app/services/resource"
import Resourcesearch from "@/app/types/Resource/ResourceSearch"

export default function SearchResources() {

    const onSearch = async (value : string, page : number) : Promise<Resourcesearch> => {
        return await searchResources(value, page) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch}/>
        </div> 
    )
}