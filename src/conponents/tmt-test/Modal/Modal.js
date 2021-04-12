import React, { useEffect, useCallback } from "react";

import "./Modal.css";
export default function ({
  isVisible,
  setIsVisible,
  title,
  onCancel,
  kchoicon,
  children,
  renderFooter,
  onOk,
  width = 700,
}) {
  // kiem tra neu truyen dung thi chay
  const _onCancel = useCallback(() => {
    if (onCancel && typeof onCancel === "function") {
      onCancel();
    }
  }, [onCancel]);

  const _ok = useCallback(() => {
    if (onOk && typeof onOk === "function") {
      onOk();
    }
  }, [onOk]);
  //day la didmout nhấn nút esc để thoát
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 27 && isVisible) {
        _onCancel();
      }
    });
    return () => {
      document.removeEventListener("keyup", () => {});
    };
  }, [isVisible, _onCancel]);

  //neu isVisible la  true thi goi class open de show modal
  useEffect(() => {
    if (isVisible) {
      document.querySelector("body").classList.add("tmt-modal-open");
    } else {
      document.querySelector("body").classList.remove("tmt-modal-open");
    }
  }, [isVisible]);

  const _renderFooter = () => {
    if (renderFooter && typeof renderFooter === "function") {
      return renderFooter();
    }
    return (
      <>
        <button onClick={_onCancel}>Cancel</button>
        <button onClick={_ok}>Ok</button>
      </>
    );
  };

  return (
    <div className={`tmt-modal-wrapper ${isVisible ? "show" : ""}`}>
      <div onClick={_onCancel} className="tmt-mask"></div>
      <div className="tmt-modal-dialog">
        <div className="tmt-modal-content" style={{ width: width }}>
          <div className="tmt-modal-header">
            {title}
            {kchoicon && (
              <i
                onClick={_onCancel}
                className="tmt-modal-close ion-close-round"
              ></i>
            )}
          </div>
          <div className="tmt-modal-body">{children}</div>
          <div className="tmt-modal-footer">
            {/* <button onClick={_onCancel}>huy</button>
            <button>xac nhan</button> */}
            {_renderFooter()}
          </div>
        </div>
      </div>
    </div>
  );
}
