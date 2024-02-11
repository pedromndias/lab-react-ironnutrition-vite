

const Search = ({searchInput, setSearchInput}) => {
  return (
    <div>
        <label htmlFor="query">Search for food: </label>
        <input type="text" name="query" id="query" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
    </div>
  )
}

export default Search