'use client'

import "./search.css"
import { useEffect, useState } from "react"
import SearchInfiniteScroll from "../search/searchInfiniteScroll"
import SearchInput from "../search/searchInput"
import MobSearch from "@/app/types/Mob/MobSearch"
import ResourceSearch from "@/app/types/Resource/ResourceSearch"
import StuffSearch from "@/app/types/Stuff/StuffSearch"
import Search, { Aggregate, SortField, SortOption, SortOrder } from "@/app/types/Search"
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
    Search: (page : number, value? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) => Promise<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search>,
    sortFields? : Array<SortOption>,
    model : string
}

export default function SearchComponent({Search, sortFields = [], model = ""} : Props) {

    // Paramètres de recherche
    const [query, setQuery] = useState('')
    const [currentSort, setCurrentSort] = useState<SortOption>(sortFields[0])
    const [filters, setFilters] = useState<Aggregate>()

    // Aggrégation
    const [aggregate, setAggregate] = useState<Aggregate>()
    const [isLoadingAggregate, setIsLoadingAggregate] = useState<boolean>(false)

    // Définition des requetes
    const fetchItems = async (data : any) : Promise<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search> => {
        return await Search(data.pageParam, query, currentSort?.sort_field, currentSort?.sort_order, filters)
    }

    const fetchAggregation = async() => {
        setIsLoadingAggregate(true)
        let data = await fetchAggregate(model, query, filters)
        setAggregate(data)
        setIsLoadingAggregate(false)
    }

    // Hook de requete infini
    const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<MobSearch | ResourceSearch | StuffSearch | DungeonSearch | Search, Error>(
        {
            queryKey : [query, currentSort, filters],
            getNextPageParam : (lastPage) => {
                const url = new URLSearchParams(lastPage["hydra:view"]["hydra:next"])
                return url.get('page')
            },
            queryFn : fetchItems,
            initialPageParam : 1
        }
    )

    let params = useSearchParams();

    useEffect(() => {
        // Si il y a un paramètre, alors on le recupère
        if(params.get('q'))
        {
            setQuery(params.get('q') ?? '')
        }
    }, []);

    // Mise à jour du champ de recherche
    const handleChangeQuery = (newValue: string) => {
        setQuery(newValue)
    }

    // A la fin du scroll, fetch de la prochaine page
    const handleScrollEnd = () => {
        if(hasNextPage && !isFetching) {
            fetchNextPage()
        }
    }

    // Changement du tri
    const handleSortChange = (sort : SortOption) => {
        setCurrentSort(sort)
    }

    // Changement des filtres
    const handleUpdateFilters = (filters : any) => {
        setFilters(filters)
    }

    useEffect(() => {
        if(isFetching && !isFetchingNextPage) {
            // On modifie l'url avec les filtres et tri actuelle

            // On fait la requete d'aggrégation,
            fetchAggregation()
        }
    }, [isFetching, isFetchingNextPage])

    return (
        <div id="searchContainer">
            <div className="filterContainer">
                <div id="totalItems">{data?.pages[0]["hydra:totalItems"] ?? 'X'} résultats</div>
                <SearchInput valueInput={query} onChange={handleChangeQuery}/>
                {currentSort && sortFields.length > 0 && <SearchOrder onChange={handleSortChange} sort_fields={sortFields} />}
                {!isLoadingAggregate && aggregate && <SearchAggregate aggregate={aggregate} onUpdate={handleUpdateFilters}/>}
                {isLoadingAggregate && <div id="loaderWrapper"><span className="loader"></span></div>}
            </div>
            <div className="resultContainer">
                {data && <SearchInfiniteScroll
                    resultsScroll={data.pages.reduce((acc : Array<Mob | Resource | Stuff | Dungeon>, page) =>  acc.concat(page["hydra:member"]), [])}
                    onScrollEnd={handleScrollEnd}
                />}
                {isFetching && <div id="loaderWrapper"><span className="loader"></span></div>}  
                <div id="tagForWakfu"><a href="https://www.wakfu.com/fr/mmorpg" target="_blank" id="linkWakfu">Wakfu</a><p id="textWakfu">MMORPG: © 2023 Ankama Studio. Tous droits réservés. &quot;WakLaboratory&quot; est un site non-officiel en aucun lien avec Ankama.</p></div>
                {data?.pages && !hasNextPage && <div id="endingMessage">Aucun résultat de plus pour cette recherche.</div>}      
            </div>
        </div>
    )
}