import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

const TextInputWithLabel = ({
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
      <TextInput
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInputWithLabel;
