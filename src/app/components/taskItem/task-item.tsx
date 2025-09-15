import { Task } from '@/types/types';
import Link from 'next/link';

type TaskItem = {
  task: Task;
};

export default function TaskItem({ task }: TaskItem) {
  return (
    <Link
      href={`/task/${task.id}`}
      className="p-2 border"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('task-id', task.id.toString())}
    >
      {task.title}
    </Link>
  );
}
