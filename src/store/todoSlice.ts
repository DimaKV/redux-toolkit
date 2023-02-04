import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Todo} from '../types';

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: '@todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>){
            // мы можем типа мутировать стейт по тому, что тут используется 'immer'
            // на самом деле мутации стейта не происходит
            state.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false
            })
        },
        removeTodo(state, action:PayloadAction<Todo['id']>){
            return state.filter( (todo) => todo.id !== action.payload );
        },
        toggleComplete(state, action:PayloadAction<Todo['id']>){
            return state.map( (todo) => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            } );
        }
    }
});

// action creates
export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions;

// reducer
export default todoSlice.reducer;