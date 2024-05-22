import Typography from "../atoms/Typography"

const SearchGiphy = ({ data, handleSubmit, handleChange, search }) => {
  return (
    <div>
        <Typography>Search for a sticker</Typography>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
        {
            data.length > 0 && data.map((sticker, i) => {
                <div key={i}>{sticker.url}</div>
            })
        }
    </div>
  )
}

export default SearchGiphy