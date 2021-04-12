import React, { useState, useCallback } from "react";
import { LEVEL } from "./contants/index";
import Button from "./Button/Button";

export default function ListItem({
  task,
  index,
  setTaskSelect = () => {},
  handleEditTask = () => {},
}) {
  const { name, level } = task;
  const [isLoading, setIsLoading] = useState(false);
  const [taskEdit, setTaskEdit] = useState(null);

  const handleClickDelete = useCallback(() => {
    typeof setTaskSelect === "function" && setTaskSelect(task);
  }, [setTaskSelect, task]);

  const handleClickEdit = useCallback(() => {
    setTaskEdit(task);
  }, [task]);

  const handleOnChange = useCallback((keyField) => {
    return (e) => {
      setTaskEdit({ ...taskEdit, [keyField]: e.target.value });
    };
  });

  const handleSaveEdit = useCallback(() => {
    setIsLoading(true);
    typeof handleEditTask === "function" &&
      handleEditTask(taskEdit, () => {
        setIsLoading(false);
        setTaskEdit(null);
      });
    console.log("tttEdit", taskEdit);
  }, [handleEditTask, taskEdit]);

  const handleClickCancel = useCallback(() => {
    setTaskEdit(null);
  }, []);

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>
        {!taskEdit ? (
          name
        ) : (
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={taskEdit.name}
            onChange={handleOnChange("name")}
          />
        )}
      </td>
      <td className="text-center">
        {!taskEdit ? (
          <span className={`badge ${LEVEL[level].class}`}>
            {LEVEL[level].name}
          </span>
        ) : (
          <select
            name="ds"
            className="form-control"
            required="required"
            value={taskEdit.level}
            onChange={handleOnChange("level")}
          >
            {LEVEL.map((level, indx) => (
              <option key={level.name + indx} value={indx}>
                {level.name}
              </option>
            ))}
          </select>
        )}
      </td>
      <td>
        {!taskEdit ? (
          <button
            onClick={handleClickEdit}
            type="button"
            className="btn btn-warning"
          >
            Edit
          </button>
        ) : (
          <Button
            loading={isLoading}
            onClick={handleSaveEdit}
            type="button"
            className="btn btn-warning"
          >
            Save
          </Button>
        )}
        {!taskEdit ? (
          <button
            onClick={handleClickDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        ) : (
          <button
            onClick={handleClickCancel}
            type="button"
            className="btn btn-info"
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
}
