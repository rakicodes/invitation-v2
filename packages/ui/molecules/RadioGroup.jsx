import RadioGroupContainer from "../atoms/RadioGroupContainer"
import RadioInputWithLabel from "./RadioInputWithLabel"

const RadioGroup = ({ radios, onChange, selected }) => {
  return (
    <RadioGroupContainer onChange={onChange}>
        {
            radios.map((r,i) => (
                <RadioInputWithLabel key={i} label={r.label} name={r.name} value={r.value} checked={selected===r.value} />
            ))
        }
    </RadioGroupContainer>
  )
}

export default RadioGroup