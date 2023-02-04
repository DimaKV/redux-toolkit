import React from 'react';
import {Todo} from '../types';
import {useSelector} from "react-redux";
import {selectAllAsyncTodos} from "../store/AsyncTodo/asyncTodoSelector";

interface TodoItemProps extends Todo {
    toggleTodo: (id: Todo['id']) => void;
    removeCurrentTodo: (id: Todo['id']) => void;
    style?: React.CSSProperties,
}

const TodoItem = ({id, title, completed, style = {}, toggleTodo, removeCurrentTodo}: TodoItemProps) => {
    const { status} = useSelector(selectAllAsyncTodos);
    return (
        <li style={style}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} disabled={status === 'loading'}/>
            <span>{title}</span>
            <span onClick={() => removeCurrentTodo(id)}>&times;</span>
        </li>
    );
}

export default TodoItem;
