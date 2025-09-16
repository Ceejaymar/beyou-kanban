'use client';

import { Toaster, toast } from 'sonner';
import { useParams } from 'next/navigation';

import { useTasks } from '@/store/tasks';
import TaskForm from '@/app/components/taskForm/task-form';
import Link from 'next/link';

export default function CreateTaskPage() {
  const { id } = useParams();
  const tasks = useTasks((state) => state.tasks);
  const updateTask = useTasks((state) => state.updateTask);

  const task = tasks.find((task) => task.id === Number(id));

  if (!task)
    return (
      <p className="mt-10 text-center text-neutral-900">
        Task not found. <Link href="/task/create">Create a task now.</Link>
      </p>
    );

  return (
    <section className="flex flex-col w-full h-full p-4">
      <h1 className="text-2xl font-bold text-center">Task details</h1>
      <TaskForm
        defaultValues={task}
        onSubmit={(values) => {
          updateTask({ ...task, ...values });
          toast.success(`Task updated`);
        }}
        buttonLabel="Update task"
      />
      <Toaster richColors />
    </section>
  );
}
