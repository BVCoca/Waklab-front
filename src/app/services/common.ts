import Search from "../types/Search"
import Slugs from "../types/Slug"
import get from "./zone"

const search = async (query : string, page : number = 1) : Promise<Search> => {
    return await get(`/search?q=${query}&page=${page}`)
}

const fetchSlugs = async (type: string, page: number = 1): Promise<Slugs> => {
    return await get(`/${type}/slugs?page=${page}`)
}

export { search, fetchSlugs }