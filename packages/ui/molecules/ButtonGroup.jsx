import Button from "../atoms/Button";
const ButtonGroup = ({ texts, fontColor, backgroundColor, fullWidth }) => {
  return (
    <div className="flex gap-2 justify-center">
      {texts.map((text, i) => (
        <Button
          key={i}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          fullWidth={fullWidth}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
