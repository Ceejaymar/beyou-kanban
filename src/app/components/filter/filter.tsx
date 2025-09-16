import { ASSIGNEES } from '@/lib/mockData';

type Filter = {
  selectedAssigneeID: number | null;
  setSelectedAssigneeID: (id: number | null) => void;
};

export default function Filter({
  selectedAssigneeID,
  setSelectedAssigneeID
}: Filter) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="assignee" className="text-sm text-neutral-500">
        Filter:
      </label>
      <select
        id="assignee"
        className="w-full px-2 py-1 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200"
        value={selectedAssigneeID ?? ''}
        onChange={(e) =>
          setSelectedAssigneeID(e.target.value ? Number(e.target.value) : null)
        }
      >
        <option value="">All</option>
        {ASSIGNEES.map((assignee) => (
          <option key={assignee.id} value={assignee.id}>
            {assignee.name}
          </option>
        ))}
      </select>
    </div>
  );
}
