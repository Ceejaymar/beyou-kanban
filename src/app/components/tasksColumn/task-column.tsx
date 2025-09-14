import { Task } from '@/types/types';
import TaskItem from '../taskItem/task-item';

type TaskColumn = {
  column: {
    title: string;
    slug: string;
  };
  tasks: Task[];
};

export default function TaskColumn({ column, tasks }: TaskColumn) {
  if (!tasks.length) return <div>No tasks available</div>;

  return (
    <div className="border min-h-full p-4">
      <h2>{column.title}</h2>
      {tasks.map((task) => (
        <div key={task.id} className="p-2 border mb-2">
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
}
