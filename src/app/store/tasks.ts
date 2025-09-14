import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { TASKS } from '@/app/lib/mockData';
import { type Task } from '../types/types';

export type State = {
  tasks: Task[];
};

export type Actions = {
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
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
        }))
    }),
    { name: 'tasks-storage' }
  )
);
