import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Search: React.FC = () => {

    const todosCtx = useContext(TodosContext)
    const searchHandler = (text:any) => {
        todosCtx.search(text)
    }
    return (
        <div>
            <input className='search-input' type='text' placeholder="Search..." onChange={ e => searchHandler(e.target.value)}/>
        </div>
    )
}

export default Search;