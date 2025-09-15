'use client';

import { useTasks } from '@/store/tasks';
import { BACKLOG } from '@/lib/mockData';
import TaskColumn from '../components/tasksColumn/task-column';
import addTasksToBacklog from '@/utils/addTasksToBackLog';

export default function BacklogPage() {
  const tasks = useTasks((state) => state.tasks);
  const backlogColumn = addTasksToBacklog(BACKLOG, tasks);

  return <TaskColumn column={backlogColumn} />;
}
