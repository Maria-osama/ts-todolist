import React, { useContext } from 'react';
import Todo from '../models/todo';
import SingleTodo from './todoItem';
import '../styling/Todos.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext)
    return (

        <ul className='todos'>
            {todosCtx.items.map(item =>
                <SingleTodo
                    key={item.id}
                    todo={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />)}
        </ul>
    )
}

export default Todos;