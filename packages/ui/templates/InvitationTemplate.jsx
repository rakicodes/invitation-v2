"use client";

import InvitationView from "../organisms/InvitationView";
import { useState } from "react";

const InvitationTemplate = ({
  message,
  imgUrl,
  imgAlt,
  responses,
  backgroundColor,
  fontColor,
  buttonBackgroundColor,
  buttonFontColor,
  isEffect,
  handleResponses,
}) => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [isMouseover, setIsMouseover] = useState(false);

  const handleMouseover = (e) => {
    if (e.target.id) {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      setXPos(Math.abs(e.screenX - randomX));
      setYPos(Math.abs(e.screenY - randomY));
    }
    setIsMouseover(true);
  };
  return (
    <div className="min-h-screen">
      <InvitationView
        message={message}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        responses={responses}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonFontColor={buttonFontColor}
        screen={true}
        handleMouseover={handleMouseover}
        btnPos={[`${xPos}px`, `${yPos}px`]}
        isEffect={[isEffect[0], isEffect[1] && isMouseover]}
        handleResponses={handleResponses}
      />
    </div>
  );
};

export default InvitationTemplate;
