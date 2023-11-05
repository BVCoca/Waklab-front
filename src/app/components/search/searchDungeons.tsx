"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchDungeons } from "@/app/services/dungeon"
import DungeonSearch from "@/app/types/Dungeon/DungeonSearch"
import { SortField, SortOrder } from "@/app/types/Search"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function SearchDungeons() {

    const onSearch = async (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder) : Promise<DungeonSearch> => {
        return await searchDungeons(page, value, sort_field, sort_order) 
    }

    return (
        <div id="cardList" className="card-list">
            <QueryClientProvider client={queryClient}>
                <SearchComponent model="dungeon" Search={onSearch} sortFields={[
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
            </QueryClientProvider>
        </div> 
    )
}