import ResourceSearch from "../types/Resource/ResourceSearch"
import ResourceSingle from "../types/Resource/ResourceSingle"
import get from "./api"

const getResource = async (slug : string) : Promise<ResourceSingle> => {
    return await get(`/resources/${slug}`)
}

const searchResources = async (query : string, page : number = 1) : Promise<ResourceSearch> => {
    return await get(`/resources?q=${query}&page=${page}`)
}


export { getResource, searchResources }