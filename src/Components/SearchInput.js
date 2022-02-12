export default function SearchInput({ search, setQuery, query }) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Enter city"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
    )
}