import Label from "../atoms/Label";
import RadioInput from "../atoms/RadioInput";
import Typography from "../atoms/Typography";

const RadioInputWithLabel = ({
  type,
  label,
  name,
  value,
  checked,
  details,
}) => {
  return (
    <div className={checked ? "flex gap-x-1 flex-wrap rounded border-2 border-lightpink p-2" : "flex gap-x-1 flex-wrap p-2"}>
      <RadioInput type={type} name={name} value={value} checked={checked} />
      <Label label={label} />
      <Typography fontSize="sm">{details}</Typography>
    </div>
  );
};

export default RadioInputWithLabel;
