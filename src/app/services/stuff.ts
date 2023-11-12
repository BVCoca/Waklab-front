import { SortField, SortOrder } from "../types/Search"
import StuffSearch from "../types/Stuff/StuffSearch"
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./zone"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

const searchStuffs = async (query : string, page : number = 1, sort_field? : SortField, sort_order? : SortOrder) : Promise<StuffSearch> => {
    let url = `/stuffs?q=${query}&page=${page}`;

    if(sort_field) {
        url += `&sort_field=${sort_field}`
    }

    if(sort_field && sort_order) {
        url += `&sort_order=${sort_order}`
    }
    
    return await get(url)
}


export { getStuff, searchStuffs }