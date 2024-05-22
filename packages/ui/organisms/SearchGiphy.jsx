import Image from "../atoms/Image"
import Typography from "../atoms/Typography"

const SearchGiphy = ({ data, handleSubmit, handleChange, search, handleSelectImg }) => {
  return (
    <div className="flex flex-col">
        <Typography>Search for a sticker</Typography>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>

        <div className="flex flex-wrap gap-1">
        {
            data.length > 0 && data.map((sticker, i) => (
                <div key={i} className="w-1/4 grow cursor-pointer" onClick={handleSelectImg}><Image url={sticker?.images?.original?.url} alt={sticker.title} /></div>
            ))
        } 
        </div>
        
    </div>
  )
}

export default SearchGiphy