import Label from "../atoms/Label";
import RadioInput from "../atoms/RadioInput";
import Paragraph from "../atoms/Paragraph";

const RadioInputWithLabel = ({
  type,
  label,
  name,
  value,
  checked,
  details,
}) => {
  return (
    <div className="flex gap-x-1 flex-wrap">
      <RadioInput type={type} name={name} value={value} checked={checked} />
      <Label label={label} />
      <Paragraph>{details}</Paragraph>
    </div>
  );
};

export default RadioInputWithLabel;
