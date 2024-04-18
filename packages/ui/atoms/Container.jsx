const Container = ({ backgroundColor, children }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
