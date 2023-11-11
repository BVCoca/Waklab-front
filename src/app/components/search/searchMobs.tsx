"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchMobs } from "@/app/services/mob"
import MobSearch from "@/app/types/Mob/MobSearch"
import { Aggregate, SortField, SortOrder } from "@/app/types/Search"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function SearchMobs() {

    const onSearch = async (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<MobSearch> => {
        return await searchMobs(page, value, sort_field, sort_order, filters) 
    }

    return (
        <div id="cardList" className="card-list">
            <QueryClientProvider client={queryClient}>
                <SearchComponent model="mob" Search={onSearch} sortFields={[
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