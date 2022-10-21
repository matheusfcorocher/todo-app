import React, { useState } from "react";

interface ArrowUpIconProps {
  className?: string;
}

function ArrowUpIcon({ className }: ArrowUpIconProps) {
  return (
    <svg
      role="image"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill="" d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
    </svg>
  );
}

export default ArrowUpIcon;
