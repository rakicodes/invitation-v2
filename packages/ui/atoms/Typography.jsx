import { createElement } from "react";

const Typography = ({
  element = "p",
  fontColor,
  textCenter,
  fontSize,
  children,
}) => {
  return createElement(
    element,
    {
      className:
        textCenter && fontSize === "sm"
          ? "w-full text-center text-sm truncate"
          : textCenter && fontSize === "lg"
            ? "w-full text-center text-lg truncate"
            : textCenter
              ? "w-full text-center truncate"
              : fontSize === "sm"
                ? "w-full text-sm truncate"
                : fontSize === "lg"
                  ? "w-full text-lg truncate"
                  : "w-full truncate",
      style: { color: fontColor },
    },
    children,
  );
};

export default Typography;
