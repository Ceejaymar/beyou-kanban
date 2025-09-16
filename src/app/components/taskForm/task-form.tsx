'use client';

import { ASSIGNEES } from '@/lib/mockData';
import { Status, type Task } from '@/types/types';

type TaskForm = {
  onSubmit: (
    task: Omit<Task, 'id' | 'createdDate' | 'tags'>,
    form: HTMLFormElement
  ) => void;
  buttonLabel: string;
  defaultValues?: Task;
};

const inputClasses =
  'w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200';
const labelClasses = 'text-neutral-500 font-light font-sans';

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
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        status: formData.get('status') as Status,
        assigneeID: Number(formData.get('assigneeID'))
        // tags: formData.getAll('tags') as string[]
      },
      form
    );
  }

  return (
    <form
      className="flex flex-col gap-4 pt-10 h-full w-full max-w-2xl mx-auto"
      onSubmit={handleTaskSubmit}
    >
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="status" className={labelClasses}>
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={defaultValues?.status ?? 'BACKLOG'}
            className={`${inputClasses}`}
          >
            <option value="BACKLOG">Backlog</option>
            <option value="SCHEDULED">Scheduled</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="assigneeID" className={labelClasses}>
            Assignee
          </label>
          <select
            id="assigneeID"
            name="assigneeID"
            defaultValue={defaultValues?.assigneeID ?? 1}
            className={`${inputClasses}`}
          >
            {ASSIGNEES.map((assignee) => (
              <option value={assignee.id} key={assignee.id}>
                {assignee.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className={labelClasses}>
          Title
        </label>
        <input
          required
          id="title"
          name="title"
          type="text"
          placeholder="eg. Build pricing component"
          defaultValue={defaultValues?.title ?? ''}
          className={`${inputClasses}`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className={labelClasses}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Task description"
          defaultValue={defaultValues?.description ?? ''}
          className={`${inputClasses} resize-y h-32`}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer w-full bg-blue-600 text-white whitespace-nowrap font-semibold py-3 px-6 mt-auto lg:w-min lg:mt-10 lg:ml-auto rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
