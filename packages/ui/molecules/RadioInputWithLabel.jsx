import Label from "../atoms/Label";
import RadioInput from "../atoms/RadioInput";

const RadioInputWithLabel = ({ type, label, name, value, checked }) => {
  return (
    <>
      <Label label={label} />
      <RadioInput type={type} name={name} value={value} checked={checked} />
    </>
  );
};

export default RadioInputWithLabel;
