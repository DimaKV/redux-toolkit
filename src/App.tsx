import NewTodoForm from './components/NewTodoForm'
import {TodoList} from './components/TodoList'
import './App.css';
import {AsyncTodoList} from "./components/AsyncTodoList";
import NewAsyncTodoForm from "./components/NewAsyncTodoForm";

function App() {
    
    return (
        <div className="App">
            <NewTodoForm/>
            <TodoList/>
            <hr/>
            <NewAsyncTodoForm/>
            <AsyncTodoList/>
        </div>
    );
}

export default App;
