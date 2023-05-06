import Todo from "../models/todo";
import TodoList from "./Todolist";
import styles from "./Todos.module.css"

//------> React.FC is generic type used to define the props<---------------
const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {   ///object type defiinition
    return (<ul className={styles.todos}>
       {props.items.map((item) => <TodoList key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />)}
    </ul>)
}

export default Todos;