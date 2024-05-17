import Button from "../atoms/Button";
const ButtonGroup = ({ texts, fontColor, backgroundColor, fullWidth, btnPos, isEffect, handleResponses, handleMouseover }) => {
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
          onClick={handleResponses ? handleResponses[i] : () => null}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
