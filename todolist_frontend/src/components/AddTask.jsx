// import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function TaskList() {

    const [task, setTask] = useState()
    
    const handleAdd = () => {

        axios.post('http://localhost:3001/add', {task: task, completed: 0})
            .then(result => {
                console.log(result)
                location.reload()
            })
            .catch(err => console.log(err))

    } 

    return (
        <div className="row col-lg-12 align-items-center text-white p-3 mt-3">
            <div className="form-group flex-fill mb-2 col-lg-10">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Entrer la tâche"
                    // value={ task } 
                    onChange = {(e) => setTask(e.target.value)}
                />
            </div>
            <button type="button" onClick={handleAdd} className="btn btn-primary mb-2 ml-2 col-lg-2">Ajouter une tâche</button>
        </div>
    )
  }
  
  export default TaskList
    