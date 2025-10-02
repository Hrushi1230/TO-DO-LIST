
import React from "react";

export default function TodoItem({todo}){
    const date=new Date(todo.createdAt).toLocaleString();

     return(
        <div className={`todo-item ${todo.completed ? "completed": " "}`} role="article" aria-label={todo.text}>
            <div className="left">
                <div className={`checkbox ${todo.completed ? "checked":""}`}>
                   {todo.completed ? "Done" : ""}
                </div>
            </div>
            <div className="body">
                <div className={`text ${todo.completed ? "completed" : ""}`}>
                  {todo.text}
                </div>
                <div className="meta">
                  Created: <span className="muted">{date}</span>
                </div>
            </div>
        </div>
     );
}