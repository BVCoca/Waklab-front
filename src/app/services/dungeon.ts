import DungeonSearch from "../types/Dungeon/DungeonSearch"
import DungeonSingle from "../types/Dungeon/DungeonSingle"
import { SortField, SortOrder } from "../types/Search"
import get from "./api"
import { search } from "./common"

const getDungeon = async (slug : string) : Promise<DungeonSingle> => {
    return await get(`/dungeons/${slug}`)
}

const searchDungeons = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder) : Promise<DungeonSearch> => {
   return await search('dungeon', page, query, sort_field, sort_order)
}


export { getDungeon, searchDungeons }