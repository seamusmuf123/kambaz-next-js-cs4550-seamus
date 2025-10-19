import TodoItem from "./TodoItem";
import todos from "./todos.json";
import { ListGroup } from "react-bootstrap";
export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ListGroup>
       { todos.map((todo, i) => {
           const key = todo.title ?? i;
           return (<TodoItem key={key} todo={todo} />);
         })}
     </ListGroup><hr/>
   </>
);}
