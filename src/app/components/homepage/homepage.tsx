import "@/app/styles/globals.css"
import Search from "../header/search/search"

export default async function Home() {

    return (
        <div id="cardList" className="card-list">
            <Search/>
        </div> 
    )
}