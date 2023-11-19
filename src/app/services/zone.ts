import get from "./api"
import SubzoneSingle from "../types/Zone/SubzoneSingle"
import SubzoneSearch from "../types/Zone/SubzoneSearch"
import { Aggregate, SortField, SortOrder } from "../types/Search"
import { search } from "./common"

const getSubzone = async (slug : string) : Promise<SubzoneSingle> => {
    return await get(`/subzones/${slug}`)
}

const searchSubzones = async (page : number = 1, query? : string, sort_field? : SortField, sort_order? : SortOrder, filters? : Aggregate) : Promise<SubzoneSearch> => {
    return await search('subzone', page, query, sort_field, sort_order, filters)
}

export { getSubzone, searchSubzones }