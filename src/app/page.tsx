'use client';

import { useTasks } from '@/store/tasks';
import { COLUMNS } from '../lib/mockData';
import TaskColumn from './components/tasksColumn/task-column';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const addTask = useTasks((state) => state.addTask);

  return (
    <div className="flex justify-center h-full py-20 ">
      <div className="font-sans grid grid-cols-3 gap-6 min-w-[1280px]">
        {COLUMNS.map((column) => {
          return <TaskColumn key={column.slug} column={column} tasks={tasks} />;
        })}
      </div>
    </div>
  );
}
