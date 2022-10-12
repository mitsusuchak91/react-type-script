import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (        
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem 
                key={item.id} 
                text={item.text} 
                onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;

//you have to describe your props types like this React.FC<{ items: string[] }>
//React.FC = functional component, it is generic types
//in this we have define object & in that item as key & value would be arrary of string 