'use client';

import { useTasks } from '@/store/tasks';
import { COLUMNS } from '../lib/mockData';
import TaskColumn from './components/tasksColumn/task-column';
import addTasksToColumn from '@/utils/addTasksToColumn';
import Link from 'next/link';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const addTask = useTasks((state) => state.addTask);

  const columnsWithTasks = addTasksToColumn(COLUMNS, tasks);

  return (
    <div className="h-full py-20 px-2 w-full max-w-[1280px]">
      <Link href="/task/create" className="cursor-pointer">
        Add task
      </Link>
      <div className="font-sans grid grid-cols-3 gap-6 w-full">
        {columnsWithTasks.map((column) => {
          return <TaskColumn key={column.slug} column={column} />;
        })}
      </div>
    </div>
  );
}
