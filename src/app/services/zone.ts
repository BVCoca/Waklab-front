import get from "./api"
import SubzoneSingle from "../types/Zone/SubzoneSingle"

const getSubzone = async (slug : string) : Promise<SubzoneSingle> => {
    return await get(`/subzones/${slug}`)
}

export { getSubzone }