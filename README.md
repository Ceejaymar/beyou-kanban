This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Kanban

A simple Kanban board application to manage tasks.

## Live Demo

[beyou-kanban.vercel.app](https://beyou-kanban.vercel.app)

## Tools used

- Next.js
- TypeScript
- Zustand
- TailwindCSS
- Sonner
- Vercel

## Getting Started

First, run the development server:

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Overview

A simple app router structure with a few pages and components. The web app displays the Kanban board with columns for different task statuses. Tasks can be dragged and dropped between columns to change their status.

### Routes

`/` - main page displaying the Kanban board

`/backlog` - page displaying tasks in the backlog status

`/task/create` - page with a form to create a new task

`/task/[id]` - page displaying task details and allowing to edit the task
