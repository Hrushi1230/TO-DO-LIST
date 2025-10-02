import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const LOCAL_KEY="todos_stage_demo";

export default function App(){
    
const [todos,setTodos]= useState(()=>{
    try{
        const raw=localStorage.getItem(LOCAL_KEY);
        return raw ? JSON.parse(raw):[];
    }
    catch{
        return [];
    }
});
   
   useEffect(()=>{
    try{
        localStorage.setItem(LOCAL_KEY,JSON.stringify(todos));
    }catch{ return;}
   },[todos]);

    const addTodo= (text)=>{
        const newTodo={
            id:Date.now(),
            text,
            completed:false,
            createdAt:new Date().toISOString(),
        };
        setTodos((prev)=>[newTodo, ...prev]);
    };

    return(
        <div className="app-wrap">
         <div className="container">
            <TodoHeader
            title="TO-DO LIST"
            subtitle="Add,edit,complete and delete tasks"
            totalCount={0}
            />
            <section aria-label="Add todo section" style={{marginTop:16}}>
                <TodoInput onAdd={addTodo}/>
            </section>
            <section aria-label="Todo list section" style={{marginTop:18}}>
               <TodoList todos={todos}/>
            </section>
           
         </div>
        </div>
       
    )
}