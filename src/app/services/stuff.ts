
import Stuff from "../types/Stuff/Stuff"
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./api"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

const searchStuffs = async (query : string) : Promise<Stuff[]> => {
    return await get(`/stuffs?q=${query}`)
}


export { getStuff, searchStuffs }