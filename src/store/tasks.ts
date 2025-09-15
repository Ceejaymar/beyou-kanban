import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { TASKS } from '@/lib/mockData';
import { type Task } from '../types/types';

export type State = {
  tasks: Task[];
};

export type Actions = {
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  moveTask: (id: number, newStatus: string) => void;
  updateTask: (updatedTask: Task) => void;
};

export type TaskStore = State & Actions;

export const useTasks = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: TASKS as Task[],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task]
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id)
        })),
      moveTask: (id, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          )
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task
          )
        }))
    }),
    { name: 'tasks-storage' }
  )
);
