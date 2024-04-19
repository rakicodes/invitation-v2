const CenterCardContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-lightpink">
      {children}
    </div>
  );
};

export default CenterCardContainer;
