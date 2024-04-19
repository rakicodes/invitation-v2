const Paragraph = ({ fontColor, children }) => {
  return (
    <p className="w-full" style={{ color: fontColor }}>
      {children}
    </p>
  );
};

export default Paragraph;
