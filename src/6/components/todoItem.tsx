
import React from 'react';

const SingleTodo: React.FC<{
     todo: string; 
     isNew: boolean; 
     onRemoveTodo: () => void;
     onDoneTodo: () => void }> = (props) => {

    return (
        <>
            <li className='item'>
                {props.todo}
                <>
                   {props.isNew && <button className='todoBtn done' onClick={props.onDoneTodo}>Done</button>}
                    <button className='todoBtn delete' onClick={props.onRemoveTodo}>Delete</button>
                </>
            </li>

        </>
    )
}

export default SingleTodo;
