import '../Task/task.css'
import { useState } from 'react'


const Task = ({task, deleteTask}) => {
    const [complete, setComplete] = useState(false)


  return (
    <div className={complete? 'containerTask conteinerTaskCompleted': 'containerTask'}>
      <h2 className={complete? 'complete':'noCopmlete'}>{task.task}</h2>
      <button id='complete' onClick={()=>setComplete(!complete)}>{complete? 'No complete' : 'Complete'}</button>
      <button id='delete' onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default Task
