const RadioGroupContainer = ({ children, onChange }) => {
  return (
    <div className="w-full" onChange={onChange}>
      {children}
    </div>
  );
};

export default RadioGroupContainer;
