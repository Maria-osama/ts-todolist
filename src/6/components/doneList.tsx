import React, { useContext } from 'react';
import SingleTodo from './todoItem';
import { TodosContext } from '../store/todos-context';

const DoneList: React.FC = () => {

    const todosCtx = useContext(TodosContext)
    const doneList = todosCtx.items.filter(item => item.isNew === false)
    const doneListFromSearch = doneList.filter(item => 
        item.text.trim().toLowerCase().includes(todosCtx.searchText.trim().toLowerCase()))
    const todoItems = todosCtx.isSearchActive ? doneListFromSearch : doneList

    return (
        <div>
            <h3>Done Items</h3>
            <ul className='todos'>
                {todoItems.length>0? todoItems.map(item =>
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

export default DoneList;
