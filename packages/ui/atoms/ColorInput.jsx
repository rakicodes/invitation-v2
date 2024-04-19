const ColorInput = ({ name, required, value, onChange }) => {
  return (
    <input
      className="w-full"
      type="color"
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default ColorInput;
