import MobSearch from "../types/Mob/MobSearch"
import MobSingle from "../types/Mob/MobSingle"
import get from "./api"

const getMob = async (slug : string) : Promise<MobSingle> => {
    return await get(`/mobs/${slug}`)
}

const searchMobs = async (query : string, page : number = 1) : Promise<MobSearch> => {
    return await get(`/mobs?q=${query}&page=${page}`)
}

export { getMob, searchMobs }