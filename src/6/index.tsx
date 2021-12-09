import React, { useState } from "react";
import NewTodo from "./components/newTodo";
import Todos from './components/todosList';


// Components
/*
* Create the components you need in the components folder.
* You may find inspiration in task 4
*/

// Style
/*
* Use this less file to create your own styles.
*/
import "./index.less";
import TodosContextProvider from "./store/todos-context";

//
const Task6 = () => {

    return (
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    );
  
}

export default Task6;
