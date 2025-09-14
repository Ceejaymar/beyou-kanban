'use client';

import { useTasks } from '@/app/store/tasks';

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const addTask = useTasks((state) => state.addTask);

  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen">
        {tasks.map((task) => {
          return task.title;
        })}
      </div>
    </>
  );
}
