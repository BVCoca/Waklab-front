import Header from "../components/header/header";
import SearchResources from "../components/search/searchResources";

export default function Page() {

  return (
    <div id="content">
      <Header small={false}/>
      <SearchResources />
    </div>
  );
}
