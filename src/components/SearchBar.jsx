function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search for a country..."
    />
  );
}

export default SearchBar;