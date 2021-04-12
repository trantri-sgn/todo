import React, { useState, useMemo, useCallback } from "react";

// import Modal from "./conponents/DemoModal/Modal";

import Header from "./conponents/tmt-test/Header";
import Control from "./conponents/tmt-test/Control";
import ListTable from "./conponents/tmt-test/ListTable";

import Container from "react-bootstrap/Container";
import initmock from "../src/conponents/tmt-test/mock/mang";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [orderBy, setOrderBy] = useState("name");
  const [orderDir, setOrderDir] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const [listTasks, setListTasks] = useState(initmock);

  const onCancel = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onOk = useCallback(() => {
    console.log(onOk);
  }, []);
  //dropdown
  function onSeclectSort(orderBy, orderDir) {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
    //  console.log(orderBy, orderDir);
  }

  //ham search
  function onChangeSearch(text) {
    setSearchText(text);
  }

  // nhan submit r sau do push DL vo mang

  function handleAddNewTask({ id, name, level }) {
    listTasks.push({ id, name, level });

    //luu y tao cai mang moi
    setListTasks([...listTasks]);

    //  setListTasks([...listTasks]);
  }
  function handleDeleTeTask(taskDelete, callback) {
    setTimeout(() => {
      let newTask = listTasks.filter((task) => task.id !== taskDelete.id);
      setListTasks(newTask);
      callback && typeof callback === "function" && callback();
    }, 500);
  }
  function handleEditTask(taskEdit, callback) {
    setTimeout(() => {
      let findIndex = listTasks.findIndex((task) => task.id === taskEdit.id);
      if (findIndex !== -1) {
        listTasks[findIndex].name = taskEdit.name;
        listTasks[findIndex].level = taskEdit.level;
        setListTasks([...listTasks]);
      }
      console.log("task Edit , ", taskEdit);

      callback && typeof callback === "function" && callback();
    }, 500);
  }

  //filter tao ra 1 array moi
  const ListSearchNew = useMemo(() => {
    return listTasks.filter((task) => {
      return task.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1; // cach 2 ghi tat vi filter tao 1 arry moi
    });
  }, [searchText, listTasks]);

  // const ListSearchNew = useMemo(() => {
  //   let newListTasks = listTasks.filter((task) => {
  //     let nameLower = task.name.toLowerCase(),
  //       qwwerty = searchText.toLowerCase();                    cach 1 k ghi tat
  //     return nameLower.indexOf(qwwerty) !== -1;
  //   });

  //   return newListTasks;
  // }, [searchText, listTasks]);

  const ListSearchAndSort = useMemo(() => {
    let returnIndex = 1;
    if (orderDir === "asc") returnIndex = -1;

    ListSearchNew.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return returnIndex;
      else if (a[orderBy] > b[orderBy]) return -1 * returnIndex;
      return 0;
    });

    return ListSearchNew;
  }, [orderBy, orderDir, ListSearchNew]);

  let injectedPropsControl = {
    orderBy,
    orderDir,
    onSeclectSort,
    onChangeSearch,
    searchText,
    isVisible,
    setIsVisible,
    onCancel: onCancel,
    onOk,
    kchoicon: true,
    handleAddNewTask,
    title: "from login ",
    renderFooter: () => {
      return (
        <div>
          <button onClick={onOk}>Dang nhap </button>
          <button onClick={() => setIsVisible(false)}> Huy </button>
        </div>
      );
    },
  };

  return (
    <Container>
      <Header />
      <Control {...injectedPropsControl} />
      <ListTable
        listTasks={ListSearchAndSort}
        handleDeleTeTask={handleDeleTeTask}
        handleEditTask={handleEditTask}
      />

      <button onClick={() => setIsVisible(!isVisible)}> Click thu</button>
    </Container>
  );
}

export default App;

// data 9 => search dc data2 => lay data2 đi qua sort => đc data 3 => cho vô listTasks
