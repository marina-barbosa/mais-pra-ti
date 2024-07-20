
import { useState, useEffect } from "react"

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('taskList'));
    if (storedTasks) {
      setTaskList(storedTasks);
    }
  }, []);

  const addItem = () => {
    setTaskList([...taskList, inputValue]);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    setInputValue('');
  }

  return (
    <div className="flex flex-col gap-8">

      <div className="flex gap-8">
        {/* INPUT */}
        <div className="flex flex-col">
          <p>{inputValue || "inputValue"}</p>
          <textarea type="text" onChange={(e) => setInputValue(e.target.value)} className="rounded my-4" />
          <button onClick={addItem} className="border border-neutral-600 rounded px-2">add item</button>
        </div>
        {/* CARD */}
        <div className="px-4 rounded border border-neutral-600 shadow-custom-card">
          <div className="title py-2 text-2xl">TO DO LIST</div>
          <ul className="content">
            {taskList.map((task, index) => (
              <li key={index} className="border-t border-neutral-600 py-2">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="w-96"><strong>Nota:</strong> a taskList esta sendo salva no localStorage, mas o ultimo item adicionado não salva.</p>

    </div>
  )
}

export default ToDoList