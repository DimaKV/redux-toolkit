import TodoItem from './TodoItem';
import {useAppDispatch} from "../store/redux-hooks";
import {Todo} from "../types";
import {removeTodo, toggleComplete} from "../store/todoSlice";
import {selectAllTodos} from "../store/todoSelectors";
import {useSelector} from "react-redux";

export const TodoList = () => {
    // при использвании селекторов можно использвать обычный useSelector
    const todos = useSelector(selectAllTodos);
    const dispatch = useAppDispatch();
    const toggleTodo = (id: Todo['id']) => {
        dispatch(toggleComplete(id));
    }

    const removeCurrentTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id));
    }
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} toggleTodo={toggleTodo} removeCurrentTodo={removeCurrentTodo}  {...todo} />
            ))}
        </ul>
    )
}

