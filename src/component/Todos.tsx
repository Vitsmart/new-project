//import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { todosContext } from "./store/todos-context";
import classes from './Todos.module.css'
import { useContext } from "react";

const Todos: React.FC = () => {
   
   const todoCtx = useContext(todosContext);

   return ( <ul className={classes.todos}>
{todoCtx.items.map(item => (
<TodoItem 
key={item.id} 
text={item.text} 
onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/>
))}
    </ul>
   )
}
export default Todos;