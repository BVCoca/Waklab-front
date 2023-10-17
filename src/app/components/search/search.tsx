import "../../styles/globals.css"
import "./search.css"
import searchIcon from "../../../../public/search-solid.svg"
import Image from "../../../../node_modules/next/image"

export default function Search() {
    return (
        <div id="searchbarContainer">
            <input type="text" placeholder="Rechercher un monstre, un équipement ou une ressource" id="searchBar" name="searchBar"/>
            <label htmlFor="searchBar"><Image src={searchIcon} alt="search icon" id="searchIcon"/></label>
        </div> 
    )
}