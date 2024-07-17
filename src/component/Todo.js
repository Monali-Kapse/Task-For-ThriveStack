import { useState } from "react"

const Todo = () => {
    const [input,setinput] = useState('')
    const [todo,setTodo] = useState([])
    

    const addtitle = ()=>{
        if(input.trim()==='')
        {
            alert('Fill Valid Title')
        }else{
            setTodo([...todo,input])
            setinput('')
        }
    }

    const addDis = () => {
        if(input.trim()==='')
            {
                alert('Fill Valid Description')
            }else{
                setTodo([...todo,input])
                setinput()
            }
    }

    const deletetitle = (index) => {
        const newTodo = [...todo]
        newTodo.splice(index,1)
        setTodo(newTodo)
    }

    const edittitle = (index) => {
        const update = todo[index]
        setinput(update)
        deletetitle(index)
    }

    return(
        <div className="bg-secondary w-75 mx-auto p-5 rounded-4 mt-5">
            <h1 className="text-warning">TODO APP</h1>
            <input
              className="form-control w-75 mx-auto mb-3" 
              type="text"
              value={input}
              onChange={(e)=>setinput(e.target.value)}
              />
              <button className="btn btn-success" onClick={addtitle}>ADD TITLE</button>
              <button className="btn btn-success " onClick={addDis}>ADD Dis</button>
              <table className="table mt-2">
                <thead>
                      <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                </thead>
               <tbody>
               {
                        todo.map((item,index)=>{
                            return(
                              <tr key={index}>
                                <td>{index +1}</td>
                                <td>{item}</td>
                                <td>{item}</td>
                                
                                <td>
                                    <button className="btn btn-warning me-2" onClick={()=>edittitle(index)}>EDIT</button>
                                    <button className="btn btn-danger" onClick={()=>deletetitle(index)}>DELETE</button>
                                </td>
                              </tr>
                            )
                        })
                    }
               </tbody>
              </table>

        </div>
    )
}
export default Todo