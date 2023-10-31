'use client'

import "./search.css"
import { useEffect, useState, useRef } from "react"
import SearchInfiniteScroll from "../search/searchInfiniteScroll"
import SearchInput from "../search/searchInput"
import Mob from "@/app/types/Mob/Mob"
import Stuff from "@/app/types/Stuff/Stuff"
import Resource from "@/app/types/Resource/Resource"
import MobSearch from "@/app/types/Mob/MobSearch"
import ResourceSearch from "@/app/types/Resource/ResourceSearch"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import Search from "@/app/types/Search"
import ArrowTop from "@/app/icons/homepageIcon/arrow_top.svg"
import DungeonSearch from "@/app/types/Dungeon/DungeonSearch"
import Dungeon from "@/app/types/Dungeon/Dungeon"
import { useSearchParams } from "next/navigation"

interface Props {
    Search: (value : string, page : number) => Promise<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search>
}

export default function SearchComponent({Search} : Props) {

    const [results, setResults] = useState<Array<Mob|Stuff|Resource|Dungeon>>([])
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [totalItems, setTotalItems] = useState<number>(0)
    const [scrollPosition, setScrollPosition] = useState(0);

    let params = useSearchParams();

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

        // Si il y a un paramètre, alors on le recupère
        if(params.get('q'))
        {
            setValue(params.get('q') ?? '')
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
            <SearchInfiniteScroll resultsScroll={results}/>
            {loading && <div id="loaderWrapper"><span className="loader"></span></div>}  
            {totalItems === 0 && <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLaboratory&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>}
            {isFinished && results.length > 0 && <div id="endingMessage">Aucun résultat de plus pour cette recherche.</div>}
            {scrollPosition >= 600 && <ArrowTop onClick={toTheTop} id="backToTheTop" alt="Bouton vers le haut de page"/>}      
        </div>
    )
}