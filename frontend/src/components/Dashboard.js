import React, { useEffect, useState } from 'react';
import { getTasks, createTask, deleteTask, updateTask } from '../services/taskService';
import { logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      if (err.response?.status === 401) navigate('/');
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await createTask(newTask);
    setNewTask({ title: '', description: '' });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <button onClick={() => { logout(); navigate('/'); }}>Logout</button>
      
      <form onSubmit={handleCreate}>
        <input value={newTask.title} placeholder="Title" onChange={(e) => setNewTask({...newTask, title: e.target.value})} required />
        <input value={newTask.description} placeholder="Description" onChange={(e) => setNewTask({...newTask, description: e.target.value})} />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.status}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;