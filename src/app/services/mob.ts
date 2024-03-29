import MobSearch from "../types/Mob/MobSearch"
import MobSingle from "../types/Mob/MobSingle"
import { Aggregate, SortField, SortOrder } from "../types/Search"
import get from "./api"
import { search } from "./common"

const getMob = async (slug : string) : Promise<MobSingle> => {
    return await get(`/mobs/${slug}`)
}

const searchMobs = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<MobSearch> => {
    return await search('mob', page, query, sort_field, sort_order, filters)
}

export { getMob, searchMobs }