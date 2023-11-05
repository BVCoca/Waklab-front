'use client'

import "./search.css"
import { useEffect, useState } from "react"
import SearchInfiniteScroll from "../search/searchInfiniteScroll"
import SearchInput from "../search/searchInput"
import MobSearch from "@/app/types/Mob/MobSearch"
import ResourceSearch from "@/app/types/Resource/ResourceSearch"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import Search, { Aggregate, SortField, SortOption, SortOrder } from "@/app/types/Search"
import ArrowTop from "@/app/icons/homepageIcon/arrow_top.svg"
import DungeonSearch from "@/app/types/Dungeon/DungeonSearch"
import { useSearchParams } from "next/navigation"
import SearchOrder from "./searchOrder"
import { useInfiniteQuery } from '@tanstack/react-query';
import Mob from "@/app/types/Mob/Mob"
import Resource from "@/app/types/Resource/Resource"
import Stuff from "@/app/types/Stuff/Stuff"
import Dungeon from "@/app/types/Dungeon/Dungeon"
import { fetchAggregate } from "@/app/services/common"
import SearchAggregate from "../aggregate/SearchAggregate"

interface Props {
    Search: (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder) => Promise<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search>,
    sortFields? : Array<SortOption>,
    model : string
}

export default function SearchComponent({Search, sortFields = [], model = ""} : Props) {

    // Paramètres de recherche
    const [query, setQuery] = useState('')
    const [currentSort, setCurrentSort] = useState<SortOption>(sortFields[0])

    // Aggrégation
    const [aggregate, setAggregate] = useState<Aggregate>()

    // Scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageContainer, setPageContainer] = useState<Element>()

    const fetchItems = async (data : any) : Promise<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search> => {
        return await Search(data.pageParam, query, currentSort?.sort_field, currentSort?.sort_order)
    }

    const { data, hasNextPage, isRefetching, isFetching, isFetchingNextPage, error, fetchNextPage } = useInfiniteQuery<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search, Error>(
        {
            queryKey : [query, currentSort],
            getNextPageParam : (lastPage) => {
                const url = new URLSearchParams(lastPage["hydra:view"]["hydra:next"])
                return url.get('page')
            },
            queryFn : fetchItems,
            initialPageParam : 1
        }
    )

    let params = useSearchParams();

    const handleSortChange = (sort : SortOption) => {
        setCurrentSort(sort)
    }

    useEffect(() => {
        // Si il y a un paramètre, alors on le recupère
        if(params.get('q'))
        {
            setQuery(params.get('q') ?? '')
        }

        let pageContainer = document.querySelector(".contentContainer")

        if(pageContainer !== null)
            setPageContainer(pageContainer)
    }, []);

    const handleScroll = () => {
        if(pageContainer !== null && pageContainer !== undefined) {
            setScrollPosition(pageContainer?.scrollTop);
            if (
                pageContainer.scrollTop + pageContainer.clientHeight === pageContainer.scrollHeight &&
                isRefetching === false
            ) {
                fetchNextPage()
            }
        }
    }

    // Création de la fonction de scroll
    useEffect(() => {
        if(pageContainer !== null && pageContainer !== undefined) {
            pageContainer.addEventListener('scroll', handleScroll);
            return () => pageContainer.removeEventListener('scroll', handleScroll);
        }
    }, [pageContainer])

    const handleChangeQuery = (newValue: string) => {
        setQuery(newValue)
    }

    const toTheTop = () => {
        if(pageContainer) {
            pageContainer.scrollTo({
                top: 0,
                behavior: "smooth",
            }); 
        }
    }

    useEffect(() => {
        if(isFetching && !isFetchingNextPage) {
            // On modifie l'url avec les filtres et tri actuelle

            // On fait la requete d'aggrégation,
            fetchAggregation()
        }
    }, [isFetching])

    const fetchAggregation = async() => {
        let data = await fetchAggregate(model, query)
        setAggregate(data)
    }

    return (
        <div id="searchContainer">
            <div className="filterContainer">
                <div id="totalItems">{data?.pages[0]["hydra:totalItems"]} résultats</div>
                <SearchInput valueInput={query} onChange={handleChangeQuery}/>
                {currentSort && sortFields.length > 0 && <SearchOrder onChange={handleSortChange} sort_fields={sortFields} />}
                {aggregate && <SearchAggregate aggregate={aggregate} />}
            </div>
            <div className="resultContainer">
                {data && <SearchInfiniteScroll resultsScroll={data.pages.reduce((acc : Array<Mob | Resource | Stuff | Dungeon>, page) =>  acc.concat(page["hydra:member"]), [])} />}
                {isFetching && <div id="loaderWrapper"><span className="loader"></span></div>}  
                {data?.pages.reduce((acc : number, page) => acc + page["hydra:member"].length, 0) === 0 && <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLaboratory&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>}
                {data?.pages && !hasNextPage && <div id="endingMessage">Aucun résultat de plus pour cette recherche.</div>}
                {scrollPosition >= 600 && <ArrowTop onClick={toTheTop} id="backToTheTop" alt="Bouton vers le haut de page"/>}      
            </div>
        </div>
    )
}