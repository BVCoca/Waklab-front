
import ResourceSingle from "../types/Resource/ResourceSingle"
import get from "./api"

const getResource = async (slug : string) : Promise<ResourceSingle> => {
    return await get(`/resources/${slug}`)
}

export { getResource }