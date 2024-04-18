const RadioGroupContainer = ({ children, onChange }) => {
  return (
    <div onChange={onChange}>
        {children}
    </div>
  )
}

export default RadioGroupContainer