import Header from "../components/header/header";
import SearchDungeons from "../components/search/searchDungeons";

export default function Page() {

  return (
    <div>
      <Header small={false}/>
      <SearchDungeons />
    </div>
  );
}
