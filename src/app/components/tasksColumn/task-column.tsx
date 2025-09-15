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
      className="flex flex-col gap-4 border border-neutral-200 p-4 rounded-xl bg-neutral-100 overflow-hidden h-2/3"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-semibold">{column.title}</h2>
      {!column.tasks.length ? (
        <div className="text-center mt-10 text-neutral-500">
          No tasks available
        </div>
      ) : (
        <div className="flex flex-col gap-3 overflow-y-auto h-full">
          {column.tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
}
