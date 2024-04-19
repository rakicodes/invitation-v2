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
      className="py-2 px-4 w-full rounded"
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
