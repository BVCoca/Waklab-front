'use client'

import "./search.css"
import { useEffect, useState } from "react"
import SearchInfiniteScroll from "../search/searchInfiniteScroll"
import SearchInput from "../search/searchInput"
import SearchFilter from "../search/searchFilter"
import Mob from "@/app/types/Mob/Mob"
import Stuff from "@/app/types/Stuff/Stuff"
import Resource from "@/app/types/Resource/Resource"
import MobSearch from "@/app/types/Mob/MobSearch"
import ResourceSearch from "@/app/types/Resource/ResourceSearch"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import Search from "@/app/types/Search"
import ArrowTop from "public/arrowTop.png"
import Image from "next/image"

interface Props {
    Search: (value : string, page : number) => Promise<MobSearch | ResourceSearch | StuffSearch | Search>
}

export default function SearchComponent({Search} : Props) {

    const [results, setResults] = useState<Array<Mob|Stuff|Resource>>([])
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [totalItems, setTotalItems] = useState<number>(0)
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
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
            setTotalItems(0)
            setLoading(false)
            if (value.length >= 3) {
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
        if (value.length >= 3) {
            LoadEntity();
        }
    }, [page]);

    function handleChange(newValue: string) {
        setValue(newValue)
    }

    async function LoadEntity() {
        if (results.length === totalItems) {
            setLoading(false)
            setIsFinished(true)
        } else if (results.length === 0) {
            setLoading(true)
        } else {
            setLoading(true)
            setIsFinished(false)
        }
        const searchResults = await Search(value, page)
        setTotalItems(searchResults['hydra:totalItems'])
        setResults(prevResults => [...prevResults, ...searchResults["hydra:member"]])
    }

    function toTheTop() {
       window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); 
    }

    return (
        <div id="searchContainer">
            {totalItems > 0 && <div id="totalItems">{totalItems} résultats</div>}
            <SearchInput valueInput={value} onChange={handleChange}/>
            <SearchFilter/>
            <SearchInfiniteScroll resultsScroll={results}/>
            {loading && <div id="loaderWrapper"><span className="loader"></span></div>}  
            {isFinished && results.length > 0 && <div id="endingMessage">Aucun résultat de plus pour cette recherche.</div>}
            {scrollPosition >= 500 && <Image onClick={toTheTop} id="backToTheTop" src={ArrowTop} width={30} alt="Bouton vers le haut de page"/>}      
        </div>
    )
}