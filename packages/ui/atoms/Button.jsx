"use client";

const Button = ({
  type = "button",
  onClick,
  children,
  fontColor = "#fff9fb",
  backgroundColor = "#b25674",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        color: fontColor,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
