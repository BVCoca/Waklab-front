import DungeonSearch from "../types/Dungeon/DungeonSearch"
import DungeonSingle from "../types/Dungeon/DungeonSingle"
import get from "./api"

const getDungeon = async (slug : string) : Promise<DungeonSingle> => {
    return await get(`/dungeons/${slug}`)
}

const searchDungeons = async (query : string, page : number = 1) : Promise<DungeonSearch> => {
    return await get(`/dungeons?q=${query}&page=${page}`)
}


export { getDungeon, searchDungeons }