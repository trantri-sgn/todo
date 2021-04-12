import React from "react";

export default function loading({
  color = "#e15b64",
  width = "25",
  height = "25",
  className = "loading",
  ...restProps
}) {
  const style = { margin: "auto", display: "block" };

  return (
    <svg
      {...restProps}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={style}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill={color}
        stroke="none"
        transform="rotate(160.257 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        />
      </path>
    </svg>
  );
}
