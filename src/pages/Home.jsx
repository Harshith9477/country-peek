import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔥 Fetch data
  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="cards-grid">
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;