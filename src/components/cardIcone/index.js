import React from "react";
import { Fade } from "react-reveal";

export default function Card({ image, title }) {
  return (
    <div className="flex flex-col items-center h-16 justify-end  w-1/2 md:w-auto my-3">
      <img src={image} alt={title} className="color-yellow2" />
      <div className="mt-2 text-sm">{title}</div>
    </div>
  );
}
