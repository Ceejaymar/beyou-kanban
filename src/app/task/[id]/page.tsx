'use client';

import { Toaster, toast } from 'sonner';
import { useParams } from 'next/navigation';

import { useTasks } from '@/store/tasks';
import TaskForm from '@/app/components/taskForm/task-form';

export default function CreateTaskPage() {
  const { id } = useParams();
  const tasks = useTasks((state) => state.tasks);
  const updateTask = useTasks((state) => state.updateTask);

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <TaskForm
        defaultValues={task}
        onSubmit={(values) => {
          updateTask({ ...task, ...values });
          toast.success(`Task updated`);
        }}
        buttonLabel="Update task"
      />
      <Toaster richColors />
    </div>
  );
}
