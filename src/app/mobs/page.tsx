import Header from "../components/header/header";
import SearchMobs from "../components/search/searchMobs";

export default function Page() {

  return (
    <div>
      <Header small={false} />
      <SearchMobs />
    </div>
  );
}
