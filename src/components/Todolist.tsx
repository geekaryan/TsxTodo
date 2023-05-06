import styles from "./Todolist.module.css"


const TodoList: React.FC<{text: string; onRemoveTodo: () => void }> = (props) => {
    return(
        <li className={styles.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    )
}

export default TodoList;