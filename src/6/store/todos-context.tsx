import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    searchText: string;
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    doneTodo: (id: number) => void;
    search: (text: string) => void;
    isSearchActive: boolean;
}


export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    searchText: '',
    addTodo: () => { },
    removeTodo: (id: number) => { },
    doneTodo: (id: number) => { },
    search: (text: string) => { },
    isSearchActive: false
});


const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchText, setSearchText] = useState('')

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

    const doneTodo = (todoId: number) => {
        let itemToBeDone = todos.filter(item => item.id === todoId)[0]
        let indexOfItem = todos.indexOf(itemToBeDone)
        setTodos(prevState => {
            return [
                ...prevState.slice(0, indexOfItem),
                {
                    ...prevState[indexOfItem],
                    isNew: false,
                },
                ...prevState.slice(indexOfItem + 1)
            ]
        })
    }

    const searchHandler = (text: string) => {
        if (text.trim().length > 0) {

            setSearchText(text)
            setIsSearchActive(true)
            
        } else {
            setSearchText('')
            setIsSearchActive(false)}
    }

    const contextValue: TodosContextObj = {
        items: todos,
        searchText: searchText,
        addTodo: newTodo,
        removeTodo: removeTodo,
        doneTodo: doneTodo,
        search: searchHandler,
        isSearchActive: isSearchActive
    }
    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
            
}

export default TodosContextProvider;
