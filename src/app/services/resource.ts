import ResourceSearch from "../types/Resource/ResourceSearch"
import ResourceSingle from "../types/Resource/ResourceSingle"
import { SortField, SortOrder } from "../types/Search"
import get from "./zone"

const getResource = async (slug : string) : Promise<ResourceSingle> => {
    return await get(`/resources/${slug}`)
}

const searchResources = async (query : string, page : number = 1, sort_field? : SortField, sort_order? : SortOrder) : Promise<ResourceSearch> => {
    let url = `/resources?q=${query}&page=${page}`;

    if(sort_field) {
        url += `&sort_field=${sort_field}`
    }

    if(sort_field && sort_order) {
        url += `&sort_order=${sort_order}`
    }
    
    return await get(url)
}


export { getResource, searchResources }