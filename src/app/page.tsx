'use client';

import { useTasks } from '@/store/tasks';
import { COLUMNS } from '../lib/mockData';
import TaskColumn from './components/tasksColumn/task-column';
import addTasksToColumn from '@/utils/addTasksToColumn';
import NavLink from './components/link/link';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const columnsWithTasks = addTasksToColumn(COLUMNS, tasks);

  return (
    <div className="flex flex-col gap-4 h-full pl-4 pt-5 pb-4 w-full max-w-[1280px] lg:px-4">
      <NavLink href="/task/create" className="self-end cursor-pointer pr-4">
        + Create new task
      </NavLink>
      <div className="font-sans grid grid-flow-col gap-6 h-full overflow-x-auto">
        {columnsWithTasks.map((column) => {
          return <TaskColumn key={column.slug} column={column} />;
        })}
      </div>
    </div>
  );
}
