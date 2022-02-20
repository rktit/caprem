import React from "react";
import { Fade } from "react-reveal";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

export default function Page({ text, link, target = "_blank" }) {
  return (
    <div className="m-auto">
      <a
        href={link}
        target={target}
        className="bg-yellow2 tracking-widest family-bold text-black px-8 py-2"
      >
        {text}
      </a>
    </div>
  );
}
