import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch(() => {
        setCountries([]);
      });
  }, [query]);

  return (
  <div className="home">
    <SearchBar query={query} onQueryChange={setQuery} />

    <div className="cards-grid">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>

    {countries.length === 0 && query && <p>No countries found</p>}
  </div>
);
}

export default Home;