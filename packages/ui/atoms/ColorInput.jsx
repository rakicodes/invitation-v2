const ColorInput = ({  name, required, value, onChange }) => {
  return (
    <input type="color" name={name} required={required} value={value} onChange={onChange}/>
  )
}

export default ColorInput