import { useRef } from "react";
import { useState } from "react"

const App = () =>{

  const [todo , setTodo] = useState([]);
  const todoVal = useRef()


  const addTodo = (event) =>{
    event.preventDefault();
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""
    
  }

  const deleteTodo = (index) =>{
    console.log("Todo Deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }

  const editTodo = (index) =>{
    console.log("Todo Edited" , index);
    const editedVal = prompt("Enter Value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);


    
  }




  return(

    <>
    <form onSubmit={addTodo}>
      <div>
        <h1>TODO APP</h1>
        <div className="input-container">
          <input type="text" placeholder="ENTER TODO" ref={todoVal}  />
          <button type="submit" id="addTaskBtn">Click</button>

        </div>
      </div>
    </form>

    <ul id="taskList">

      {todo.map((item , index)=>{
        return <div key={index}>
          <li>{item}</li>
          <br />

          <button onClick={() => deleteTodo(index)} >Delete</button>
          <button onClick={() => editTodo(index)}  >Edit</button>


        </div>
      })}

    </ul>
    </>
    

  )
}

export default App