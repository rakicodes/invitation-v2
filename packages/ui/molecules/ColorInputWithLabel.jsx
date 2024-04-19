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
    <div className="flex flex-col w-full grow md:w-1/3">
      <Label label={label} />
      <ColorInput
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ColorInputWithLabel;
