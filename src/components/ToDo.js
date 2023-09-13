import React,{useState} from "react"

const  ToDo = () =>{

    const[isClicked, setIsClicked] = useState(false)
    return (
        <div>
            <h2 id="main">React.useMemo</h2>
            <h1>My todos</h1>
            {
                isClicked && <p>New Todo</p>
            }
            <button id="add-todo-btn" onClick={()=>setIsClicked(true)}>Add Todo</button>
            

        </div>
    )
}

export default ToDo;