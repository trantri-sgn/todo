import React, { useEffect } from "react";
import "./modal.css";

export default function Modal({ children, Title, isVisible, onCancel }) {
  useEffect(() => {
    if (isVisible) {
      //modal open -> them class vao cho body
      document.querySelector("body").classList.add("tmt-modal-open");
    } else {
      //modal close -> remove class vao bo
      document.querySelector("body").classList.remove("tmt-modal-open");
    }
  }, [isVisible]);
  const _onCancel = () => {
    if (onCancel && typeof onCancel === "function") {
      onCancel();
    }
  };
  return (
    <div className={`tmt-modal-wrapper ${isVisible ? "show" : ""}`}>
      <div className="tmt-mask" onClick={_onCancel}></div>
      <div className="tmt-modal-dialog">
        <div className="tmt-modal-content">
          <div className="tmt-modal-header">
            {Title}
            <i
              onClick={_onCancel}
              className="tmt-modal-close ion-close-round"
            ></i>
          </div>
          <div className="tmt-modal-body">{children}</div>
          <div className="tmt-modal-footer">
            <button onClick={_onCancel}>huy</button>
            <button>xac nhan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
