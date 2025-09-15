import { Task, Column } from '@/types/types';

export default function addTasksToColumn(columns: Column[], tasks: Task[]) {
  return columns.map((column) => ({
    ...column,
    tasks: tasks.filter((task) => task.status === column.slug)
  }));
}
