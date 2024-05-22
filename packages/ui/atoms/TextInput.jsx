const TextInput = ({ type, name, required, value, onChange, placeholder }) => {
  return (
    <input
      className="px-1 py-2 rounded border border-pink outline-2 outline-lightpink w-full"
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
