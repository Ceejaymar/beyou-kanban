'use client';

import NavLink from '../components/link/link';
import { useTasks } from '@/store/tasks';
import { BACKLOG } from '@/lib/mockData';
import TaskColumn from '../components/tasksColumn/task-column';
import addTasksToBacklog from '@/utils/addTasksToBackLog';

export default function BacklogPage() {
  const tasks = useTasks((state) => state.tasks);
  const backlogColumn = addTasksToBacklog(BACKLOG, tasks);

  return (
    <section className="flex flex-col gap-4 mt-5 pb-4 h-full">
      <NavLink href="/task/create" className="self-end cursor-pointer">
        + Create new task
      </NavLink>
      <TaskColumn column={backlogColumn} />
    </section>
  );
}
