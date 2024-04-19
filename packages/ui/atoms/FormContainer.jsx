const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 p-2 min-h-full w-full">
      {children}
    </div>
  );
};

export default FormContainer;
