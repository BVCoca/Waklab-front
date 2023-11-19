"use client"

import "@/app/styles/globals.css"
import SearchComponent from "./searchComponent"
import { Aggregate, SortField, SortOrder } from "@/app/types/Search"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import SubzoneSearch from "@/app/types/Zone/SubzoneSearch"
import { searchSubzones } from "@/app/services/zone"

const queryClient = new QueryClient()

export default function SearchSubzones() {

    const onSearch = async (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<SubzoneSearch> => {
        return await searchSubzones(page, value, sort_field, sort_order, filters) 
    }

    return (
        <div id="cardList" className="card-list">
            <QueryClientProvider client={queryClient}>
                <SearchComponent model="subzone" Search={onSearch} sortFields={[
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