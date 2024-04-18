const RadioInput = ({ name, value, checked}) => {
  return (
    <input type="radio" name={name} value={value} checked={checked}/>
  )
}

export default RadioInput