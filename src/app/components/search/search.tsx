import "../../styles/globals.css"
import "./search.css"
import searchIcon from "../../../../public/search-solid.svg"
import Image from "../../../../node_modules/next/image"

interface Props {
    placeholder: string
}

export default function Search({placeholder}: Props) {
    return (
        <div id="searchbarContainer">
            <input type="text" placeholder={placeholder} id="searchBar" name="searchBar"/>
            <label htmlFor="searchBar"><Image src={searchIcon} alt="search icon" id="searchIcon"/></label>
        </div> 
    )
}