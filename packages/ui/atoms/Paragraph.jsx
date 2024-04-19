const Paragraph = ({ fontColor, textCenter, children }) => {
  return (
    <p className={textCenter ? "w-full text-center" : "w-full"} style={{ color: fontColor }}>
      {children}
    </p>
  );
};

export default Paragraph;
