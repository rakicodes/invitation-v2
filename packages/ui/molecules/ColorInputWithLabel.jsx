import ColorInput from "../atoms/ColorInput";
import Label from "../atoms/Label";

const ColorInputWithLabel = ({
  type,
  label,
  name,
  required,
  value,
  onChange,
}) => {
  return (
    <>
      <Label label={label} />
      <ColorInput
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default ColorInputWithLabel;
