import { Task } from '@/types/types';

type TaskItem = {
  task: Task;
};

export default function TaskItem({ task }: TaskItem) {
  return <div>{task.title}</div>;
}
