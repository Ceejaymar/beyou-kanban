export type Status = 'BACKLOG' | 'SCHEDULED' | 'IN_PROGRESS' | 'DONE';

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdDate: string;
  tags: string[];
  assigneeID: number;
};

export type Assignee = {
  id: number;
  name: string;
  profileColor: string;
};
