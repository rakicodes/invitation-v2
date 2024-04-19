import Typography from "../atoms/Typography";
import RadioGroupContainer from "../templates/container/RadioGroupContainer";
import RadioInputWithLabel from "./RadioInputWithLabel";

const RadioGroup = ({ title, radios, onChange, selected }) => {
  return (
    <RadioGroupContainer onChange={onChange}>
      <Typography element="h3">{title}</Typography>
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
