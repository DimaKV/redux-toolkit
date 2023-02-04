import React from "react";
import TodoItem from './TodoItem';
import {useAppDispatch} from "../store/redux-hooks";
import {Todo} from "../types";

import {useSelector} from "react-redux";
import {selectAllAsyncTodos} from "../store/AsyncTodo/asyncTodoSelector";
import {fetchAllTodos, removeTodo, toggleTodo} from "../store/AsyncTodo/todoAsyncActions";

export const AsyncTodoList = () => {
    const {list, status} = useSelector(selectAllAsyncTodos);
    const dispatch = useAppDispatch();
    const toggleCurrentTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id));
    }

    const removeCurrentTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id));
    }
    React.useEffect(() => {
        dispatch(fetchAllTodos());
    }, [] )

    return (
        <ul>
            {list.map((todo) => (
                <TodoItem key={todo.id} toggleTodo={toggleCurrentTodo} removeCurrentTodo={removeCurrentTodo}  {...todo} />
            ))}
        </ul>
    )
}

