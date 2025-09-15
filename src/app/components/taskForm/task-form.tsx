'use client';

import { ASSIGNEES } from '@/lib/mockData';
import { Status, type Task } from '@/types/types';

type TaskForm = {
  onSubmit: (task: Task, form: HTMLFormElement) => void;
  buttonLabel: string;
  defaultValues?: Task;
};

export default function TaskForm({
  onSubmit,
  buttonLabel,
  defaultValues
}: TaskForm) {
  function handleTaskSubmit(event: React.FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    onSubmit(
      {
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        assigneeID: Number(formData.get('assigneeID'))
        // tags: formData.getAll('tags') as string[]
      },
      form
    );
  }

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleTaskSubmit}>
        add to
        <select name="status" defaultValue={defaultValues?.status ?? 'BACKLOG'}>
          <option value="BACKLOG">Backlog</option>
          <option value="SCHEDULED">Scheduled</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <select name="assigneeID" defaultValue={defaultValues?.assigneeID ?? 1}>
          {ASSIGNEES.map((assignee) => (
            <option value={assignee.id} key={assignee.id}>
              {assignee.name}
            </option>
          ))}
        </select>
        <input
          required
          name="title"
          type="text"
          placeholder="eg. Build pricing component"
          defaultValue={defaultValues?.title ?? ''}
        />
        <textarea
          name="description"
          placeholder="Task description"
          defaultValue={defaultValues?.description ?? ''}
        />
        <button type="submit" className="cursor-pointer">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
