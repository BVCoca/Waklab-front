import DungeonSearch from "../types/Dungeon/DungeonSearch"
import DungeonSingle from "../types/Dungeon/DungeonSingle"
import { SortField, SortOrder } from "../types/Search"
import get from "./zone"

const getDungeon = async (slug : string) : Promise<DungeonSingle> => {
    return await get(`/dungeons/${slug}`)
}

const searchDungeons = async (query : string, page : number = 1, sort_field? : SortField, sort_order? : SortOrder) : Promise<DungeonSearch> => {
    let url = `/dungeons?q=${query}&page=${page}`;

    if(sort_field) {
        url += `&sort_field=${sort_field}`
    }

    if(sort_field && sort_order) {
        url += `&sort_order=${sort_order}`
    }
    
    return await get(url)
}


export { getDungeon, searchDungeons }