import { SortOption } from "@/app/types/Search"
import Select from "../common/Select"

interface Props {
    sort_fields : SortOption[],
    onChange : (sort : SortOption) => void
}

export default function SearchOrder({sort_fields = [], onChange} : Props) {

    let options = sort_fields.map((so : SortOption, index : number) => {
        return {
            label : so.label,
            value : index
        }
    })

    const handleChange = (e : any) => {
        onChange(sort_fields[e])
    }

    return(
        <Select options={options} onChange={handleChange} />
    )
}