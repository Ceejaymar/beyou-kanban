'use client';

import { v4 as uuid } from 'uuid';

import { useTasks } from '@/store/tasks';

export default function TaskDetails() {
  const addTask = useTasks((state) => state.addTask);

  function handleTaskSubmit(event: React.FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const newTask = {
      id: uuid(),
      title: formData.get('title'),
      description: formData.get('description'),
      status: formData.get('status'),
      createdDate: new Date().toISOString(),
      tags: ['design', 'mobile'],
      assigneeID: formData.get('assigneeID')
    };

    addTask(newTask);
    form.reset();
  }

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleTaskSubmit}>
        add to
        <select name="status" defaultValue="BACKLOG">
          <option value="BACKLOG">Backlog</option>
          <option value="SCHEDULED">Scheduled</option>
        </select>
        <select name="assigneeID" defaultValue={1}>
          <option value={1}>Los</option>
          <option value={2}>Mia</option>
          <option value={3}>Jim</option>
          <option value={4}>Zoe</option>
          <option value={5}>Max</option>
        </select>
        <input
          name="title"
          type="text"
          placeholder="eg. Build pricing component"
        />
        <textarea name="description" placeholder="Task description" />
        <button type="submit" className="cursor-pointer">
          Add Task
        </button>
      </form>
    </div>
  );
}
