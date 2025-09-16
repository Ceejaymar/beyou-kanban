'use client';

import { Toaster, toast } from 'sonner';

import { useTasks } from '@/store/tasks';
import TaskForm from '@/app/components/taskForm/task-form';
import { createNumericNumber } from '@/utils/createNumericNumber';

export default function CreateTaskPage() {
  const addTask = useTasks((state) => state.addTask);

  return (
    <div className="flex flex-col w-full h-full p-4 xl:max-w-[1280px]">
      <h1 className="text-2xl font-bold text-center">Create new Task</h1>
      <TaskForm
        onSubmit={(values, form) => {
          addTask({
            ...values,
            id: createNumericNumber(),
            createdDate: new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            tags: []
          });
          toast.success(`Task added to ${values.status}`);
          form.reset();
        }}
        buttonLabel="Create task"
      />
      <Toaster richColors />
    </div>
  );
}
