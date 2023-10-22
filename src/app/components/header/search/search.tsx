'use client'

import { useEffect, useState } from "react"
import SearchInfiniteScroll from "./searchInfiniteScroll"
import SearchInput from "./searchInput"
import { search } from "@/app/services/common"
import Mob from "@/app/types/Mob/Mob"
import Stuff from "@/app/types/Stuff/Stuff"
import Resource from "@/app/types/Resource/Resource"

export default function Search() {

    const [results, setResults] = useState<Array<Mob|Stuff|Resource>>([])
    const [value, setValue] = useState('')

    function handleChange(newValue: string) {
        setValue(newValue)
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            LoadEntity();
        }, 500);
        
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [value])

    async function LoadEntity() {
        const searchResults = await search(value)
        setResults(searchResults["hydra:member"])
    }

    return (
        <div id="searchContainer">
            <SearchInput valueInput={value} onChange={handleChange}/>
            <SearchInfiniteScroll resultsScroll={results}/>
        </div>
    )
}