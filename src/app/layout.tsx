import "./styles/globals.css"
import "./styles/menu.css"
import Menu from "./components/menu/menu"

export default function Layout({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
      <div id="pageContent">
        <div id="menuContainer">
          <Menu/>
        </div>
        {children}
      </div>
    </main>
  )
}
