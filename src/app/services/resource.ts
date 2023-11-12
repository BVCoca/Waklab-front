import ResourceSearch from "../types/Resource/ResourceSearch"
import ResourceSingle from "../types/Resource/ResourceSingle"
import { Aggregate, SortField, SortOrder } from "../types/Search"
import get from "./api"
import { search } from "./common"

const getResource = async (slug : string) : Promise<ResourceSingle> => {
    return await get(`/resources/${slug}`)
}

const searchResources = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<ResourceSearch> => {
    return await search('resource', page, query, sort_field, sort_order, filters)
}


export { getResource, searchResources }