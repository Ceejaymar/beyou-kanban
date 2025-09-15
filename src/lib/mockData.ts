import { Status } from '@/types/types';

export const COLUMNS = [
  {
    slug: 'SCHEDULED' as Status,
    title: 'Scheduled',
    tasks: []
  },
  {
    slug: 'IN_PROGRESS' as Status,
    title: 'In Progress',
    tasks: []
  },
  {
    slug: 'DONE' as Status,
    title: 'Done',
    tasks: []
  }
];

export const BACKLOG = [
  {
    slug: 'BACKLOG' as Status,
    title: 'Backlog',
    tasks: []
  }
];

export const ASSIGNEES = [
  { id: 1, name: 'Los', profileColor: 'blue' },
  { id: 2, name: 'Mia', profileColor: 'red' },
  { id: 3, name: 'Jim', profileColor: 'green' },
  { id: 4, name: 'Zoe', profileColor: 'yellow' },
  { id: 5, name: 'Max', profileColor: 'purple' }
];

export const TASKS = [
  {
    id: 1,
    title: 'Create mobile app wireframes',
    description: 'Create a modern and responsive mobile app wireframes.',
    status: 'SCHEDULED',

    createdDate: '2025-09-14',
    tags: ['design', 'mobile'],
    assigneeID: 1
  },
  {
    id: 2,
    title: 'Create mobile app prototypes',
    description: 'Create interactive prototypes for the mobile app.',
    status: 'IN_PROGRESS',
    createdDate: '2025-09-15',
    tags: ['design', 'mobile', 'development'],
    assigneeID: 1
  },
  {
    id: 3,
    title: 'Research Backend Solutions',
    description:
      'Investigate and compare backend technologies for the new project.',
    status: 'DONE',
    createdDate: '2025-09-10',
    tags: ['research'],
    assigneeID: 3
  },
  {
    id: 4,
    title: 'Choose app color scheme',
    description: 'Select the primary and secondary colors for the app',
    status: 'SCHEDULED',
    createdDate: '2025-09-16',
    tags: ['design'],
    assigneeID: 2
  },
  {
    id: 5,
    title: 'Create Icons for the App',
    description: 'Design and implement icons for the app',
    status: 'BACKLOG',
    createdDate: '2025-09-16',
    tags: ['design'],
    assigneeID: 1
  }
];
