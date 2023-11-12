import { Aggregate, SortField, SortOrder } from "../types/Search"
import Slugs from "../types/Slug"
import get from "./api"

const fetchSlugs = async (type: string, page: number = 1): Promise<Slugs> => {
    return await get(`/${type}/slugs?page=${page}`)
}

const getFiltersParams = (params: URLSearchParams, filters? : Aggregate) => {
    if(filters?.type && filters.type.length > 0) {
        params.set('type', filters.type.map(t => t && t.value).join('|'))
    }

    if(filters?.rarity && filters.rarity.length > 0) {
        params.set('rarity', filters.rarity.map(t => t && t.value).join('|'))
    }

    if(filters?.family && filters.family.length > 0) {
        params.set('family', filters.family.map(t => t && t.value).join('|'))
    }
}

const search = async (model : string, page : number = 1, query : string|undefined, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<any> => {
    let url = `/search?model=${model}&page=${page}`;

    let params = new URLSearchParams();

    if(query) {
        params.set('q', query)
    }

    if(sort_field) {
        params.set('sort_field', sort_field)
        url += '&sort_field=' + sort_field
    }

    if(sort_field && sort_order) {
        params.set('sort_order', sort_order)
    }

    getFiltersParams(params, filters)

    if(params.size > 0) {
        url += "&" +params.toString()
    }
    
    return await get(url)
}

const fetchAggregate = async(model : string, query : string|undefined, filters? : Aggregate) : Promise<Aggregate> => {
    let url = `/${model}/aggregate`;

    let params = new URLSearchParams();

    if(query) {
        params.append('q', query)
    }

    getFiltersParams(params, filters)

    if(params.size > 0) {
        url += "?" + params.toString()
    }
    
    return await get(url )
}

export { fetchSlugs, search, fetchAggregate }