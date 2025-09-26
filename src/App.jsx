import TodoHeader from "./components/TodoHeader";


export default function App(){
    return(
        <div className="app-wrap">
         <div className="container">
            <TodoHeader
            title="TO-DO LIST"
            subtitle="Add,edit,complete and delete tasks"
            totalCount={0}
            />
         </div>
        </div>
       
    )
}