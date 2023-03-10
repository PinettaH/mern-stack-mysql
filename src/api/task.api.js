import axios from 'axios';

export const getTasksRequest = async () =>
    await axios.get("http://localhost:4000/tasks");


export const createTaskRequest = async (task) => {
    await axios.post('http://localhost:4000/tasks', task);
}