"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { search } from "@/app/services/common"
import Search from "@/app/types/Search"

export default function SearchAll() {

    const onSearch = async (value : string, page : number) : Promise<Search> => {
        return await search(value, page) 
    }

    return (
        <div id="cardList" className="card-list">
            <SearchComponent Search={onSearch}/>
        </div> 
    )
}