import { createElement } from 'react'

const Typography = ({ element="p", fontColor, textCenter, children }) => {
  return createElement(
    element,
    {
      className: textCenter ? "w-full text-center" : "w-full",
      style: { color: fontColor }
    },
    children
  );
};

export default Typography;
