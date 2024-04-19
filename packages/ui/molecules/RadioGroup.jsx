import Paragraph from "../atoms/Paragraph";
import RadioGroupContainer from "../atoms/RadioGroupContainer";
import RadioInputWithLabel from "./RadioInputWithLabel";

const RadioGroup = ({ title, radios, onChange, selected }) => {
  return (
    <RadioGroupContainer onChange={onChange}>
      <Paragraph>{title}</Paragraph>
      {radios.map((r, i) => (
        <RadioInputWithLabel
          key={i}
          label={r.label}
          name={r.name}
          value={r.value}
          checked={selected === r.value}
          details={r.details}
        />
      ))}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
