import Header from "../components/header/header";
import SearchDungeons from "../components/search/searchDungeons";

export default function Page() {

  return (
    <div id="content">
      <Header small={false}/>
      <SearchDungeons />
    </div>
  );
}
