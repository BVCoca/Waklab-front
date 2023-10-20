import "./styles/globals.css"
import Header from "./components/header/header"
import Home from "./components/homepage/homepage"

export default function Page() {
  return (
    <div id="content">
      <Header/>
      <Home/>
    </div>
  )
}
