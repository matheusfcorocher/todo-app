import React, { useState } from "react";

interface ArrowDownIconProps {
  className?: string;
}

function ArrowDownIcon({ className }: ArrowDownIconProps) {
  return (
    <svg
      role="image"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill="" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  );
}

export default ArrowDownIcon;
