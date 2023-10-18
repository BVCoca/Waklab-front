
import StuffSingle from "../types/Stuff/StuffSingle"
import get from "./api"

const getStuff = async (slug : string) : Promise<StuffSingle> => {
    return await get(`/stuffs/${slug}`)
}

export { getStuff }