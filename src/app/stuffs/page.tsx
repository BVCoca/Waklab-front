import Header from "../components/header/header";
import SearchStuffs from "../components/search/searchStuffs";

export default function Page() {

  return (
    <div>
      <Header small={false}/>
      <SearchStuffs />
    </div>
  );
}
