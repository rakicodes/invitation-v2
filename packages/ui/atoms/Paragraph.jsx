const Paragraph = ({ fontColor, children }) => {
  return <p className={`text-[${fontColor}]`}>{children}</p>;
};

export default Paragraph;
