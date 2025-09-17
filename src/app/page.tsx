'use client';

import { useTasks } from '@/store/tasks';
import { COLUMNS } from '../lib/mockData';
import TaskColumn from './components/tasksColumn/task-column';
import addTasksToColumn from '@/utils/addTasksToColumn';
import NavLink from './components/link/link';
import Filter from './components/filter/filter';
import { useState } from 'react';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const [selectedAssigneeID, setSelectedAssigneeID] = useState<number | null>(
    null
  );
  const filteredTasks = selectedAssigneeID
    ? tasks.filter((t) => t.assigneeID === selectedAssigneeID)
    : tasks;
  const columnsWithTasks = addTasksToColumn(COLUMNS, filteredTasks);

  return (
    <div className="flex flex-col gap-4 h-full pl-4 pt-5 pb-4 w-full max-w-[1280px] lg:px-4">
      <h1 className="text-2xl font-bold text-center">Task Board</h1>
      <div className="flex justify-between px-4 lg:px-1">
        <Filter
          selectedAssigneeID={selectedAssigneeID}
          setSelectedAssigneeID={setSelectedAssigneeID}
        />
        <NavLink href="/task/create">+ Create new task</NavLink>
      </div>
      <div className="font-sans grid grid-flow-col auto-cols-[1fr] gap-6 h-full overflow-x-auto">
        {columnsWithTasks.map((column) => {
          return <TaskColumn key={column.slug} column={column} />;
        })}
      </div>
    </div>
  );
}
