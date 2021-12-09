import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}


export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: number) => { }
});


const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const newTodo = (todoText: string) => {
        setTodos(prevState => {
            return prevState.concat(new Todo(todoText))

        })
    }

    const removeTodo = (todoId: number) => {
        setTodos(presState => {
            return presState.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: newTodo,
        removeTodo: removeTodo
    }
    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
            
}

export default TodosContextProvider;