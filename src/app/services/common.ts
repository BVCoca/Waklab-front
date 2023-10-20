import Search from "../types/Search"
import get from "./api"

const search = async (query : string, page : number = 1) : Promise<Search> => {
    return await get(`/search?q=${query}&page=${page}`)
}

export { search }