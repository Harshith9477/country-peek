import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar query={query} onQueryChange={setQuery} />
      <p>Start searching to explore countries.</p>
    </div>
  );
}

export default Home;