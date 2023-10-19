
import Resource from "../types/Resource/Resource"
import ResourceSingle from "../types/Resource/ResourceSingle"
import get from "./api"

const getResource = async (slug : string) : Promise<ResourceSingle> => {
    return await get(`/resources/${slug}`)
}

const searchResources = async (query : string) : Promise<Resource[]> => {
    return await get(`/resources?q=${query}`)
}


export { getResource, searchResources }