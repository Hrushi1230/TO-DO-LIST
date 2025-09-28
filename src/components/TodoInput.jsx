import { useEffect, useRef, useState } from "react"

export default function TodoInput({onAdd}){
    const [value,setValue]= useState("");
    const inputRef=useRef();

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);
    const handelSubmit =(e)=>{
      e.preventDeafult();
      const text=value.trim();
      console.log(text);
      if(!text) return;
      onAdd(text);
      setValue("");
      inputRef.current?.focus();
    }


    return(
        <form className="input-row" aria-label="Add todo form" onSubmit={handelSubmit}>
            <input 
            ref={inputRef}
            type="text"
            className="input"
            placeholder="Add a new task and press enter"
            aria-label="New todo"
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
            }}

            />
            <button className="btn" type="submit" aria-label="Add todo">
                Add
            </button>
        </form>
    )
}