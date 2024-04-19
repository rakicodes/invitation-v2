import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

const TextInputWithLabel = ({
  type,
  label,
  name,
  required,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-full">
      <Label label={label} />
      <TextInput
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputWithLabel;
