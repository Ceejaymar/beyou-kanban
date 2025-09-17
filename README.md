This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# BeYou Kanban

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

## Key Decision & Trade-offs

- **State Management**: I hade never used Zustand before, but I felt this project could be a good opportunity to try it out. I looked at the docs and figured it looked simple enough, and it was! There was not a lot or boilerplate and being that I did not have that much state to manage, it ended up being a great tool. The persist feature was a nice surprise, too. I did not have to setup my own local storage logic.

- **Drag and Drop**: I've never had to implement a drag and drop feature before. I wanted to have a go at creating it without adding a dependency. I researched a couple different approaches and decided to go with the native HTML drag and drop API. It was pretty simple and easier than I expected.

- **Styling**: I initially want to use more variables and build a small design system, but there wasn't much to track. I just tried to keep things consistent and simple.

- **Folder Structure**: I went with the default Next.js app directory structure, but created a components folder to keep things organized. I created folders for other essentials like types and store. To keep things organized in case it got bigger.

- **Uncontrolled Form**: I decided to go with an uncontrolled form for the task form. I felt it was simpler and there wasn't a lot of complex validation or interactivity needed. I figured it would save some re-renders and it also made it easier to reset the form after submission.

## Accessibility & Performance notes

I made sure to use semantic HTML elements.

I tested the app with Lighthouse. Only minor color contrast issues were found.

## Testing Approach

I did not have time to write tests for this project, but if I had more time I would write unit tests for the components using Jest and React Testing Library. I would also write end-to-end tests using Cypress to test the main user flows like creating a task, moving tasks between columns, and editing a task.

## Time spent

Approximately 6 hours. I didn't want to spend too much time after the timebox of 4 hours.

## If I had more time...

- Making sure the drag and drop feature is keyboard accessible.
- Add tests
- A more robust filter system. Right now you can only filter by assignee. But it would be nice to filter by tags, search by title, etc.
- More robust form validation and error handling
- Add animations to the drag and drop feature
- Spend more time making sure the drag and drop feature works well on mobile. On safari on iOS it's a little wonky because when holding links it opens a preview. So I'd want to prevent that from happening, to be able to drag smoothly.
- When scrolling the task columns on mobile, I would like to for the columns to snap into place.

## Final Thoughts

I really enjoyed building this. I've always wondered how to set up a kanban, so it was cool making a basic version of one. I'm glad I used Zustand and I'm excited to use it on my personal projects now. There are definitely areas for improvement and some things I missed but overall I'm happy with how it turned out given the time constraint. Thanks for reading!
