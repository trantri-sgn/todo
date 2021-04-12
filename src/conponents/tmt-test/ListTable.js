import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";

import Modal from "./Modal/Modal";
import Button from "./Button/Button";

export default function ListTable({
  listTasks,
  handleDeleTeTask,
  handleEditTask,
}) {
  const [isOpenModal, setIsOpenModel] = useState(false);
  const [taskSelect, setTaskSelect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const style = {
    width: "10%",
  };
  useEffect(() => {
    if (taskSelect) {
      setIsOpenModel(true);
    } else {
      setIsOpenModel(false);
    }
  }, [taskSelect]);

  function handleDelete() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    handleDeleTeTask &&
      typeof handleDeleTeTask === "function" &&
      handleDeleTeTask(taskSelect, (responseData) => {
        setIsLoading(false);
        if (responseData && responseData.error) alert(responseData.message);
        else {
          setTaskSelect(null);
        }
        // console.log("sau khi xoa se goi ham nay");
      });
  }

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={style} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: 160 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTasks.map((task, index) => {
            return (
              <ListItem
                key={task.id}
                task={task}
                index={index}
                setTaskSelect={setTaskSelect}
                handleEditTask={handleEditTask}
              />
            );
          })}
        </tbody>
      </table>
      <Modal
        title="Thong Bao"
        isVisible={isOpenModal}
        renderFooter={() => {
          return (
            <>
              <Button
                loading={isLoading}
                onClick={() => {
                  handleDelete();
                }}
                style={{ marginRight: 10 }}
                type="button"
                className="btn btn-primary"
              >
                Confirm
              </Button>
              <Button
                onClick={() => {
                  setTaskSelect(null);
                }}
                type="button"
                className="btn btn-secondary"
              >
                Cancel
              </Button>
            </>
          );
        }}
      >
        <h4>Ban co muon chac xoa</h4>
      </Modal>
    </div>
  );
}
