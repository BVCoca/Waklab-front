import "./styles/globals.css"
import Header from "./components/header/header"
import SearchAll from "./components/search/searchAll"

export default function Page() {
  return (
    <div id="content">
      <Header small={false}/>
      <SearchAll/>
    </div>
  )
}
