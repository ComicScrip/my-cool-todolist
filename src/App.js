import TaskListElement from './components/TaskListElement';
import uniqid from 'uniqid';
import { useLocalStorage } from 'react-use';
import { useState } from 'react';

const initialTaskList = [
  { name: 'Faire les courses', done: false, id: uniqid() },
  { name: 'Faire à manger', done: false, id: uniqid() },
  { name: 'Faire un livecoding', done: true, id: uniqid() },
];

function App() {
  /*
  const [newTaskName, setNewTaskName] = useState('');
  const [taskList, setTaskList] = useState(initialTaskList);
  */
  const [newTaskName, setNewTaskName] = useState('');
  const [taskList, setTaskList] = useLocalStorage('taskList', initialTaskList);

  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    if (newTaskName) {
      const newTask = { name: newTaskName, done: false, id: uniqid() };
      setTaskList([...taskList, newTask]);
      setNewTaskName('');
    }
  };

  return (
    <>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          placeholder='Add a new task'
          value={newTaskName}
          onChange={handleTaskNameChange}
        />
      </form>
      <ul>
        {taskList.map((task) => (
          <TaskListElement
            key={task.id}
            {...task}
            handleClick={() => {
              /*
              const newTaskList = taskList.slice();
              const taskToUpdate = newTaskList.find((t) => t.id === task.id);
              taskToUpdate.done = !taskToUpdate.done;
              */
              const newTaskList = taskList.map((t) => {
                if (t.id === task.id) {
                  return { ...t, done: !t.done };
                }
                return t;
              });
              setTaskList(newTaskList);
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
