import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

import { KEY } from "../tmt-test/contants";

export default function ControlSort({
  onSeclectSort,
  orderBy,
  orderDir,
  
}) {
  function onSelectDD(eventKey) {
    let [orderBy, orderDir] = eventKey.split("-");
    onSeclectSort &&
      typeof onSeclectSort === "function" &&
      onSeclectSort(orderBy, orderDir);
  }
  return (
    <div className="col-12">
      <div className="form-group">
        <Dropdown onSelect={onSelectDD}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {KEY.map((o) => {
              return (
                <Dropdown.Item
                  key={o.key}
                  eventKey={o.key}
                  active={`${orderBy}-${orderDir}` === o.key}
                >
                  {o.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <span className=" badge badge-success badge-medium">
          {orderBy} - {orderDir}
        </span>
      </div>
    </div>
  );
}
