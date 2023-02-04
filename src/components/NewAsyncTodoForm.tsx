import {useRef} from 'react'
import {useAppDispatch} from "../store/redux-hooks";
import {addTodo} from "../store/todoSlice";
import {createTodo} from "../store/AsyncTodo/todoAsyncActions";

const NewTodoForm = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        if (inputRef.current?.value) {
            dispatch(createTodo(inputRef.current.value));
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="new todo"
                ref={inputRef}
            />
            <button onClick={onClick}>Add todo</button>
        </>
    );
};

export default NewTodoForm;
