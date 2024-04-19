const Container = ({ backgroundColor, children }) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-2 min-h-screen"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
