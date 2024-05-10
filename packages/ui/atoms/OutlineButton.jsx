"use client";

const OutlineButton = ({
  type = "button",
  onClick,
  children,
  fullWidth = true,
  backgroundColor = "#fff9fb",
  fontColor = "#b25674",
  borderColor = "#b25674"
}) => {
  return (
    <button
      className={fullWidth ? "py-2 px-4 border w-full rounded" : "py-2 border px-4 rounded"}
      type={type}
      onClick={onClick}
      style={{
        color: fontColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }}
    >
      {children}
    </button>
  );
};

export default OutlineButton;