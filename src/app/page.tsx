'use client';

import { useTasks } from '@/store/tasks';
import { COLUMNS } from '../lib/mockData';
import TaskColumn from './components/tasksColumn/task-column';
import addTasksToColumn from '@/utils/addTasksToColumn';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const addTask = useTasks((state) => state.addTask);

  const columnsWithTasks = addTasksToColumn(COLUMNS, tasks);

  return (
    <div className="flex flex-col h-full py-20 px-2 max-w-[1280px]">
      <button
        className="cursor-pointer"
        onClick={() =>
          addTask({
            id: Math.floor(Math.random() * 1000),
            title: 'yerrrrr',
            description:
              'Create a modern and responsive mobile app wireframes.',
            status: 'SCHEDULED',
            createdDate: '2025-09-14',
            tags: ['design', 'mobile'],
            assigneeID: 1
          })
        }
      >
        Add task
      </button>
      <div className="font-sans grid grid-cols-3 gap-6 w-full">
        {columnsWithTasks.map((column) => {
          return <TaskColumn key={column.slug} column={column} />;
        })}
      </div>
    </div>
  );
}
