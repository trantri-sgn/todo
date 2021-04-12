import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ControlSearch from "./ControlSearch";
import ControlSort from "./ControlSort";

import ControlAddNewFile from "./ControlAddNewFile";

export default function Control({
  onSeclectSort,
  orderBy,
  orderDir,
  searchText,
  onChangeSearch,
  isVisible,
  handleAddNewTask,
}) {
  //

  return (
    <Row>
      <Col xs={12} lg={6}>
        <Row>
          {/* SORT : START */}
          <ControlSort
            onSeclectSort={onSeclectSort}
            orderBy={orderBy}
            orderDir={orderDir}
          />
          <ControlSearch
            onChangeSearch={onChangeSearch}
            searchText={searchText}
          />
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <ControlAddNewFile handleAddNewTask={handleAddNewTask} />
      </Col>
    </Row>
  );
}
