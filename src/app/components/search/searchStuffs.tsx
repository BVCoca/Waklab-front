"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { searchStuffs } from "@/app/services/stuff"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import { Aggregate, SortField, SortOrder } from "@/app/types/Search"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function SearchStuffs() {

    const onSearch = async (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<StuffSearch> => {
        return await searchStuffs(page, value, sort_field, sort_order, filters) 
    }

    return (
        <div id="cardList" className="card-list">
            <QueryClientProvider client={queryClient}>
                <SearchComponent model="stuff" Search={onSearch} sortFields={[
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
            </QueryClientProvider>
        </div> 
    )
}