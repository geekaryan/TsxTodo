import {useRef} from 'react'
import styles from "./NewTodo.module.css"

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }

        props.onAddTodo(enteredText);
    };

    return(
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor='text'>Todo Text</label>
            <input type="text" id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}


export default NewTodo;