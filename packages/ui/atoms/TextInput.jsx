const TextInput = ({ type, name, required, value, onChange }) => {
  return (
    <input
      className="px-1 py-2"
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
