'use client'

import "./search.css"
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
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    function handleChange(newValue: string) {
        setValue(newValue)
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            setResults([]) 
            setPage(1);
            if (value.length >= 3) {
                LoadEntity();
            }
        }, 500);
        
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [value, page])

    async function LoadEntity() {
        setLoading(true)
        const searchResults = await search(value, page)
        setResults(prevResults => [...prevResults, ...searchResults["hydra:member"]])
        setLoading(false)
    }

    useEffect(() => {
        function handleScroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                setPage(prevPage => prevPage + 1);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="searchContainer">
            <SearchInput valueInput={value} onChange={handleChange}/>
            {loading  === false
            ? 
            <SearchInfiniteScroll resultsScroll={results}/>
            :
            <span className="loader"></span>
            }
        </div>
    )
}