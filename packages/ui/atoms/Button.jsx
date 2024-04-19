"use client";

const Button = ({
  type = "button",
  onClick,
  children,
  fullWidth = true,
  fontColor = "#fff9fb",
  backgroundColor = "#b25674",
}) => {
  return (
    <button
      className={fullWidth ? "py-2 px-4 w-full rounded" : "py-2 px-4 rounded"}
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
