import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import '../styling/NewTodo.less';

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext)
    const inputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;

        if (enteredText.trim().length === 0) return;
        todosCtx.addTodo(enteredText);
        inputRef.current!.value = '';
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Name</label>
            <input id='text' type='text' ref={inputRef} placeholder='Type here' />
            <button>Add Todo</button>
        </form>
    )
};


export default NewTodo;
