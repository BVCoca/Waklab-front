import { SortField, SortOrder } from "../types/Search"
import StuffSearch from "../types/Stuff/StuffSearch"
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./api"
import { search } from "./common"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

const searchStuffs = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder) : Promise<StuffSearch> => {
    return await search('resource', page, query, sort_field, sort_order)
}

export { getStuff, searchStuffs }