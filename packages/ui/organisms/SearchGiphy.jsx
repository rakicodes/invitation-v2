import Button from "../atoms/Button"
import Image from "../atoms/Image"
import TextInput from "../atoms/TextInput"
import Typography from "../atoms/Typography"

const SearchGiphy = ({ data, handleSubmit, handleChange, search, handleSelectImg }) => {
  return (
    <div className="flex flex-col">
        <Typography>Search for a sticker</Typography>
        <div className="flex gap-1 w-full">
            <div className="grow">
                <TextInput type="text" name="search" required={false} value={search} onChange={handleChange} />
            </div>
            <div className="w-1/5">
                <Button onClick={handleSubmit} full={false}>Search</Button>
            </div>
        </div>

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