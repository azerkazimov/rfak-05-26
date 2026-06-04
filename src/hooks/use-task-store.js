import { create } from "zustand";

export const useTodoListStore = create ((set)=>({
    tasks: [], // default tasks ["asdadasd","dasdadsad","dasdasdas"]
    addTask: (task)=>set(state=>({tasks: [...state.tasks, task]})),
    deleteTask: (task)=> set(state=>({tasks: state.tasks.filter(t=>t!==task)})),
}))