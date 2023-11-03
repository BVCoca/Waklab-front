import Header from "../components/header/header";
import SearchResources from "../components/search/searchResources";

export default function Page() {

  return (
    <div>
      <Header small={false}/>
      <SearchResources />
    </div>
  );
}
