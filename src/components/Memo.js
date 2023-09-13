import React,{useState} from "react"

const Memo = () =>{

    const[text,setText] = useState("")
   const[memo, setMemo] = useState([])

   
   console.log(memo)

   function handleClick(){
           setMemo([...memo,text])
           setText("")
           console.log(text)
   }

    return (
        <div>
            <h2>React.memo</h2>
            <input id="skill-input" onChange={(e)=>setText(e.target.value)} placeholder="Add skill"/><button onClick={handleClick}>Add Skill</button>
        
        {
            <ul>
                {
                        memo.map((item,index)=>
                            <li key={index}>{item}</li>
                        )
                }
            </ul>
        }
        </div>
    )
}

export default Memo;