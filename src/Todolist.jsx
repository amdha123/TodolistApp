
import './Todolist.css';
import React,{useState} from 'react'
function Todolist()
{
    const[tasks,settask]=useState(["Eat breakfast","take a shower","walk the dog"]);
    const[newtask,setnewtask]=useState("");

    function handleinputchange(event)
    {
        setnewtask(event.target.value);
    }
    function addTask()
    {
        if(newtask.trim()!=="")
        {
       settask(t=>[...t,newtask]);
       setnewtask("");
       
        }
    }
    function deletetask(index)
    {
        const updatetask=tasks.filter((_ ,i)=>i!==index);
        settask(updatetask);
    }
    function movetaskup(index)
    {
        if(index>0)
        {
            const updatetask=[...tasks];
            [updatetask[index],updatetask[index-1]]=
            [updatetask[index-1],updatetask[index]];
            settask(updatetask);
        }
    }
    function movetaskdown(index)
    {
        if(index < tasks.length-1)
            {
                const updatetask=[...tasks];
                [updatetask[index],updatetask[index+1]]=
                [updatetask[index+1],updatetask[index]];
                settask(updatetask);
            }

    }
    return(
        <div>
    <h1>To-Do-List</h1>
    <div >
    
        <input type="text" value={newtask} placeholder="enter a task" onChange={handleinputchange}/>
        <button class="add" onClick={addTask}>Add</button>
        <div className="wid">
        <ol>{tasks.map((task,index)=><li key={index}>
        <span>{task}</span>
        <button class="del" onClick={()=>deletetask(index)}>Delete</button>
        <span><button class="up"onClick={()=>movetaskup(index)}>☝</button></span>
        <button class="down"onClick={()=>movetaskdown(index)}>👎</button>
        </li>
    )}</ol>
    </div>
        
    </div>
    </div>
    )

}
export default Todolist;