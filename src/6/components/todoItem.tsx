
import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import '../styling/TodoItem.css';

const SingleTodo: React.FC<{ todo: string; onRemoveTodo: () => void }> = (props) => {

    const todosCtx = useContext(TodosContext)
    
    const doneTodoItem = () => {

    }
    return (
        <>
            <li className='item'>
                {props.todo}
                <>
                    <button onClick={doneTodoItem}>Done</button>
                    <button onClick={props.onRemoveTodo}>Delete</button>
                </>
            </li>

        </>
    )
}

export default SingleTodo;