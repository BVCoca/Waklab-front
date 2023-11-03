import MobSearch from "../types/Mob/MobSearch"
import MobSingle from "../types/Mob/MobSingle"
import { SortField, SortOrder } from "../types/Search"
import get from "./api"

const getMob = async (slug : string) : Promise<MobSingle> => {
    return await get(`/mobs/${slug}`)
}

const searchMobs = async (query : string, page : number = 1, sort_field? : SortField, sort_order? : SortOrder) : Promise<MobSearch> => {
    let url = `/mobs?q=${query}&page=${page}`;

    if(sort_field) {
        url += `&sort_field=${sort_field}`
    }

    if(sort_field && sort_order) {
        url += `&sort_order=${sort_order}`
    }
    
    return await get(url)
}

export { getMob, searchMobs }