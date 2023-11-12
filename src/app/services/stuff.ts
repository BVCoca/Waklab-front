import { Aggregate, SortField, SortOrder } from "../types/Search"
import StuffSearch from "../types/Stuff/StuffSearch"
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./api"
import { search } from "./common"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

const searchStuffs = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<StuffSearch> => {
    return await search('stuff', page, query, sort_field, sort_order, filters)
}

export { getStuff, searchStuffs }