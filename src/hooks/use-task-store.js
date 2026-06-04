import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useTodoListStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
      deleteTask: (task) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t !== task) })),
    }),
    {
      name: "todo-tasks",
    }
  )
);

// export const useTodoListStore = create((set) => ({
//         tasks: [],
//         addTask: (task) =>
//           set((state) => {
//             const newTasks = [...state.tasks, task];
//             localStorage.setItem("tasks", JSON.stringify(newTasks));
//             return { tasks: newTasks };
//           }),
//         deleteTask: (task) =>
//           set((state) => ({ tasks: state.tasks.filter((t) => t !== task) })),
//       }),
//   );
