import React, { useState } from "react";
import Modal from "./Modal/Modal";

import { v4 as uuidv4 } from "uuid";

import { LEVEL } from "./contants/index";

export default function ControlAddNewFile({ handleAddNewTask }) {
  const [isOpenModel, SetIsOpenModel] = useState(false);
  const initTask = { name: "", level: 0 };
  const [task, setTask] = useState(initTask);

  //xử lí ham input
  function handleOnChange(keyField) {
    return (e) => {
      setTask({
        ...task,
        [keyField]: e.target.value,
      });
    };
  }

  //xử lí BT submit
  function handleClick() {
    let data = {
      id: uuidv4(),
      ...task,
    };
    handleAddNewTask(data);
    setTask(initTask);
    SetIsOpenModel(false);
  }

  return (
    <>
      <div className="form-group add-task">
        <button
          onClick={() => SetIsOpenModel(true)}
          type="button"
          className="btn btn-info btn-block"
        >
          Add Task
        </button>
      </div>
      <Modal
        width={500}
        isVisible={isOpenModel}
        title="Thêm Tác Vụ Mới"
        renderFooter={() => {
          return (
            <>
              <button
                onClick={handleClick}
                style={{ marginRight: 10 }}
                type="button"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                onClick={() => SetIsOpenModel(false)}
                type="button"
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </>
          );
        }}
      >
        <div className="form-group">
          <label className="sr-only">label</label>
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={task.name}
            onChange={handleOnChange("name")}
          />
        </div>
        <div className="form-group">
          <label className="sr-only">label</label>
          <select
            name="ds"
            className="form-control"
            required="required"
            value={task.level}
            onChange={handleOnChange("level")}
          >
            {LEVEL.map((level, indx) => (
              <option key={level.name + indx} value={indx}>
                {level.name}
              </option>
            ))}
          </select>
        </div>
      </Modal>
    </>
  );
}
