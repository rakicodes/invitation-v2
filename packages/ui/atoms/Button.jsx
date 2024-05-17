"use client";

const Button = ({
  type = "button",
  onClick,
  children,
  fullWidth = true,
  fontColor = "#fff9fb",
  backgroundColor = "#b25674",
  btnPos = ["0px", "0px"],
  isEffect,
  handleMouseover
}) => {
  return (
    <button
      id={isEffect && "btnEffect"}
      className={fullWidth ? "py-2 px-4 w-full rounded" : "py-2 px-4 rounded"}
      type={type}
      onClick={onClick}
      onMouseOver={isEffect ? handleMouseover : null}
      style={{
        color: fontColor,
        backgroundColor: backgroundColor,
        position: isEffect ? "fixed" : "relative",
        left: isEffect ? btnPos[0] : 0,
        top: isEffect ? btnPos[1] : 0
      }}
    >
      {children}
    </button>
  );
};

export default Button;
