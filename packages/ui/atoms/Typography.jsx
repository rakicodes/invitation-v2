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
          ? "w-full text-center text-sm"
          : textCenter && fontSize === "lg"
            ? "w-full text-center text-lg"
            : textCenter
              ? "w-full text-center"
              : fontSize === "sm"
                ? "w-full text-sm"
                : fontSize === "lg"
                  ? "w-full text-lg"
                  : "w-full",
      style: { color: fontColor },
    },
    children,
  );
};

export default Typography;
