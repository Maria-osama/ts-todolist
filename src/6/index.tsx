import React from "react";
import DoneList from "./components/doneList";
import NewTodo from "./components/newTodo";
import Search from "./components/search";
import TodosList from './components/todosList';
import "./index.less";
import TodosContextProvider from "./store/todos-context";

// Components
/*
* Create the components you need in the components folder.
* You may find inspiration in task 4
*/

// Style
/*
* Use this less file to create your own styles.
*/

//

const Task6 = () => {

  return (
    <TodosContextProvider>
      <Search />
      <NewTodo />
      
      <div style={{ display: 'flex' }}>
        <TodosList />
        <DoneList />
      </div>
    </TodosContextProvider>
  );

}

export default Task6;
