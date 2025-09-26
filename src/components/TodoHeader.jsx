

export default function TodoHeader({title,subtitle,totalCount}){

    return(
      <header 
      className="todo-header"
      >
        <div className="header-left">
            <h1 className="app-title">{title}</h1>
            <p className="app-subtitle">{subtitle}</p>
        </div>
        <div className="header-right" aria-hidden="true">
            <div className="task-count" aria-live="polite">
                <span className="count-number">{totalCount}</span>
                <span className="count-label">tasks</span>
            </div>
        </div>
      </header>
    );

}