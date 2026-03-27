function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}

export default SearchBar;