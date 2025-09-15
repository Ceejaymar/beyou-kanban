import { useTasks } from '@/store/tasks';
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
  const moveTask = useTasks((state) => state.moveTask);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('task-id');
    moveTask(Number(taskId), column.slug);
  }

  return (
    <div
      className="border p-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{column.title}</h2>
      {!column.tasks.length ? (
        <div>No tasks available</div>
      ) : (
        <div className="flex flex-col gap-3">
          {column.tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
}
