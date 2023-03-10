import { useEffect, useState } from 'react';
import { getTasksRequest } from '../api/task.api';
import TaskCard from '../components/TaskCard';

function TaskPages() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);

    }
    loadTasks()
  }, [])


  return (
    <div>
      <h1>Tasks</h1>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))
      }

    </div>
  )
}

export default TaskPages;
