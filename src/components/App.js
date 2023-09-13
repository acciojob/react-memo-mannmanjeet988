<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React,{useState} from "react"
import Counter from "./Counter"
import Memo from "./Memo"
import ToDo from "./ToDo"

const App = () =>{
    return (
        <div>
            <ToDo />
           <Counter/>
           <Memo />
        </div>
    )
}

export default App;