import { Task } from '@/types/types';
import TaskItem from '../taskItem/task-item';

type TaskColumn = {
  column: {
    title: string;
    slug: string;
    tasks: Task[];
  };
};

export default function TaskColumn({ column }: TaskColumn) {
  if (!column.tasks.length) return <div>No tasks available</div>;

  return (
    <div className="border p-4">
      <h2>{column.title}</h2>
      <div className="flex flex-col gap-3">
        {column.tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
