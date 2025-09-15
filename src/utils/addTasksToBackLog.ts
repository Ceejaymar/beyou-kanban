import { type Task, type Column } from '@/types/types';

export default function getBacklogColumn(backlog: Column[], tasks: Task[]) {
  return backlog.map((column) => ({
    ...column,
    tasks: tasks.filter((task) => task.status === column.slug)
  }))[0];
}
