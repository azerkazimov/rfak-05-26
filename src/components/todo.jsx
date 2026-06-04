import { EditIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useTodoListStore } from "../hooks/use-task-store";
import "./todo.css";


export default function Todo() {

  const [inputValue, setInputValue] = useState("");

  // Reac-hook-form ile form yazmaq ... isdifade edeceyik.
//   const { register, handleSubmit, formState: {errors} } = useForm()

  const { tasks, addTask, deleteTask } = useTodoListStore();
  const handleAddTask = () => {
    addTask(inputValue);
    setInputValue("");
  };

  const handleDeleteTask = (task) => {
    deleteTask(task);
  };

  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Add a task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task} className="task-item">
            {task}
            <div className="task-item-actions">
            <EditIcon size={18} />
            <TrashIcon size={18} onClick={() => handleDeleteTask(task)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
