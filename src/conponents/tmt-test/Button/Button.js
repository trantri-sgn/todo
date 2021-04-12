import React from "react";
import "./button.css";
import Loading from "./loading ";

export default function Button({ children, loading, ...restProps }) {
  return (
    <button {...restProps}>
      {/* neu nhu loading co gia tri thi thuc hien Component  */}
      {loading && <Loading color="fff" />}
      <span> {children}</span>
    </button>
  );
}
