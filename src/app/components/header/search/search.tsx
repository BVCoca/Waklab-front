'use client'

import "./search.css"
import { useEffect, useState } from "react"
import SearchInfiniteScroll from "./searchInfiniteScroll"
import SearchInput from "./searchInput"
import SearchFilter from "./searchFilter"
import { search } from "@/app/services/common"
import Mob from "@/app/types/Mob/Mob"
import Stuff from "@/app/types/Stuff/Stuff"
import Resource from "@/app/types/Resource/Resource"

export default function Search() {

    const [results, setResults] = useState<Array<Mob|Stuff|Resource>>([])
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isFinished, setIsFinished] = useState<string>()
    const [totalItems, setTotalItems] = useState<number>()

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

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            setResults([])
            setTotalItems(undefined)
            if (value.length > 3) {
                setPage(1);
                LoadEntity();
            }
        }, 500);
        
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [value])

    useEffect(() => {
        if (value.length > 3) {
            LoadEntity();
        }
    }, [page]);

    function handleChange(newValue: string) {
        setValue(newValue)
    }

    async function LoadEntity() {
        if (results.length === totalItems) {
            setIsFinished('Aucun résultats de plus pour cette recherche')
            setLoading(false)
        } else {
            setLoading(true)
        }
        const searchResults = await search(value, page)
        setTotalItems(searchResults['hydra:totalItems'])
        setResults(prevResults => [...prevResults, ...searchResults["hydra:member"]])
        setLoading(false)
    }

    return (
        <div id="searchContainer">
            {totalItems && <div id="totalItems">{totalItems} résultats</div>}
            <SearchInput valueInput={value} onChange={handleChange}/>
            <SearchFilter/>
            <SearchInfiniteScroll resultsScroll={results}/>
            {loading && <div id="loaderWrapper"><span className="loader"></span></div>}  
            {isFinished && <div id="ending"><div id="endingMessage">{isFinished}</div><a href="#top" id="backToTheTop">Retour en Haut</a></div> }
        </div>
    )
}