
import MobSingle from "../types/Mob/MobSingle"
import get from "./api"

const getMob = async (slug : string) : Promise<MobSingle> => {
    return await get(`/mobs/${slug}`)
}

export { getMob }