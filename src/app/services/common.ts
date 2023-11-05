import Search, { Aggregate, SortField, SortOrder } from "../types/Search"
import Slugs from "../types/Slug"
import get from "./api"

const fetchSlugs = async (type: string, page: number = 1): Promise<Slugs> => {
    return await get(`/${type}/slugs?page=${page}`)
}

const search = async (model : string, page : number = 1, query : string|undefined ,sort_field? : SortField, sort_order? : SortOrder) : Promise<any> => {
    let url = `/search?model=${model}&page=${page}`;

    if(query) {
        url += '&q=' + query 
    }

    if(sort_field) {
        url += '&sort_field=' + sort_field
    }

    if(sort_field && sort_order) {
        url += '&sort_order=' + sort_order
    }
    
    return await get(url)
}

const fetchAggregate = async(model : string, query : string|undefined) : Promise<Aggregate> => {
    let url = `/${model}/aggregate`;

    if(query) {
        url += '?q=' + query 
    }
    
    return await get(url)
}

export { fetchSlugs, search, fetchAggregate }