const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 p-2 min-h-screen w-full">
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
