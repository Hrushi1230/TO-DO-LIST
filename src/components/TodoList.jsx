import TodoItem from "./Todoitem";

export default function TodoList({ todos }){
  if(!todos || todos.length===0){
    return(
        <div className="todo-empty" role="status" aria-live="polite" style={{marginTop:12}}>
            No taks yet - add your first one 
        </div>
    );
  }
  return(
    <ul className="todo-list" role="list" aria-label="Todo items">
       {todos.map((todo)=>(
        <li key={todo.id}>
          <TodoItem todo={todo}/>
        </li>
       ))}
    </ul>
  )
}