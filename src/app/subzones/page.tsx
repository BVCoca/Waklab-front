import Header from "../components/header/header";
import SearchSubzones from "../components/search/searchSubzones";

export default function Page() {

  return (
    <div>
      <Header small={false}/>
      <SearchSubzones />
    </div>
  );
}
