import "./styles/globals.css"
import Header from "./components/header/header"
import Home from "@/app/components/home/home"

export default function Page() {
  console.log(Home)
  return (
    <div id="content">
      <Header/>
      <Home/>
    </div>
  )
}
