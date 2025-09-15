'use client';

import { Toaster, toast } from 'sonner';
import { v4 as uuid } from 'uuid';

import { useTasks } from '@/store/tasks';
import TaskForm from '@/app/components/taskForm/task-form';

export default function CreateTaskPage() {
  const addTask = useTasks((state) => state.addTask);

  // const newTask = {
  //   id: uuid(),
  //   title: formData.get('title'),
  //   description: formData.get('description'),
  //   status: formData.get('status'),
  //   createdDate: new Date().toISOString(),
  //   tags: ['design', 'mobile'],
  //   assigneeID: formData.get('assigneeID')
  // };

  return (
    <div>
      <TaskForm
        onSubmit={(values, form) => {
          addTask({
            id: uuid(),
            ...values,
            createdDate: new Date().toISOString(),
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
