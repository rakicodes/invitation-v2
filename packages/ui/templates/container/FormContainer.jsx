const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 bg-lightpink p-6 rounded w-full min-h-screen sm:w-auto sm:min-h-0 sm:bg-white">
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
