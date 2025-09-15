import Link from 'next/link';

import { Task } from '@/types/types';
import { ASSIGNEES } from '@/lib/mockData';

type TaskItem = {
  task: Task;
};

export default function TaskItem({ task }: TaskItem) {
  const assignee = ASSIGNEES.find(
    (assignee) => assignee.id === task.assigneeID
  );

  return (
    <Link
      href={`/task/${task.id}`}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('task-id', task.id.toString())}
      className="relative flex flex-col gap-3 p-4  border border-neutral-300 rounded-lg bg-white"
    >
      <p className="text-neutral-900 font-semibold">{task.title}</p>
      <div
        className={`absolute top-4 right-4 text-center font-semibold text-white rounded-full w-6 h-6`}
        style={{ backgroundColor: assignee!.profileColor }}
      >
        {assignee!.name[0]}
      </div>
      <p className="text-neutral-500 line-clamp-1">{task.description}</p>
      <p className="self-end text-xs text-neutral-400">{task.createdDate}</p>
    </Link>
  );
}
