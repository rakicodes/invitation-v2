const TextInput = ({ type, name, required, value, onChange }) => {
  return (
    <input type={type} name={name} required={required} value={value} onChange={onChange}/>
  )
}

export default TextInput