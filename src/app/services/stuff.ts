import StuffSearch from "../types/Stuff/StuffSearch"
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./api"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

const searchStuffs = async (query : string, page : number = 1) : Promise<StuffSearch> => {
    return await get(`/stuffs?q=${query}&page=${page}`)
}


export { getStuff, searchStuffs }