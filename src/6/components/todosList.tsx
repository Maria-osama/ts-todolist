import React, { useContext } from 'react';
import SingleTodo from './todoItem';
import { TodosContext } from '../store/todos-context';

const TodosList: React.FC = () => {

    const todosCtx = useContext(TodosContext)
    const list = todosCtx.items.filter(item => item.isNew === true)
    const listFromSearch = todosCtx.searchResult.filter(item => item.isNew === true)
    const todoItems = todosCtx.isSearchActive ? listFromSearch : list
    return (
        <div>
            <h3>Pending Items</h3>
            <ul className='todos'>
                {todoItems.length > 0 ? todoItems.map(item =>
                    <SingleTodo
                        key={item.id}
                        todo={item.text}
                        isNew={item.isNew}
                        onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                        onDoneTodo={todosCtx.doneTodo.bind(null, item.id)}
                    />) : <span>No Items Found</span>}
            </ul>
        </div>
    )
}

export default TodosList;
