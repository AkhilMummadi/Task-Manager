import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks found</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;