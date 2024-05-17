import Button from "../atoms/Button";
const ButtonGroup = ({ texts, fontColor, backgroundColor, fullWidth, btnPos, isEffect, handleMouseover }) => {
  return (
    <div className="flex gap-2 justify-center">
      {texts.map((text, i) => (
        <Button
          key={i}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          fullWidth={fullWidth}
          btnPos={btnPos}
          isEffect={isEffect ? isEffect[i] : false}
          handleMouseover={handleMouseover}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
