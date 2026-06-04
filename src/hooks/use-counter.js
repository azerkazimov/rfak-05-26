import {create} from "zustand";

export const useCounter = create((set) => ({
    count: 1, // dufault number
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))