# Customer Support Zone

This project is built with React and Vite for Assignment-02.

## What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax extension that lets us write UI structure using HTML-like tags inside JavaScript.

Why it is used:

- Makes component UI easier to read and maintain.
- Lets us combine logic and markup in one place.
- React converts JSX into `React.createElement(...)` calls, which become virtual DOM objects.

## What is the difference between State and Props?

- `Props` are inputs passed from a parent component to a child component.
- `State` is local data managed inside a component.

Main differences:

- `Props` are read-only in the receiving component.
- `State` can change over time using state setters.
- Changes in both props and state can trigger re-renders.

## What is the useState hook, and how does it work?

`useState` is a React hook used to add state to functional components.

Example:

```jsx
const [count, setCount] = useState(0)
```

- `count` is the current state value.
- `setCount` updates that value.
- Calling `setCount` schedules a re-render with the new state.

## How can you share state between components in React?

Common ways:

- Lift state up to the nearest common parent and pass data/functions via props.
- Use Context API for global/shared state across many levels.
- Use external state libraries (like Redux, Zustand) for larger apps.

In this project, ticket state is managed in the main component and passed to sections that need it.

## How is event handling done in React?

React handles events using camelCase props and function handlers.

Examples:

- `onClick={handleClick}`
- `onChange={handleInput}`
- `onSubmit={handleSubmit}`

The handler function receives a synthetic event object. We can use methods like `event.preventDefault()` when needed.

## Project Links

- Live Link: YOUR_DEPLOYED_URL_HERE
- GitHub Repository: https://github.com/solaimanSawon/my-first-react

## React Deployment Guide

### 1. Pre-Deployment

Before deploying, make sure the app is production-ready:

- Run build command:

```bash
npm run build
```

- Confirm production environment variables are set correctly.

### 2. Deploying to Vercel

#### Method A: Git Integration

1. Push your code to GitHub or GitLab.
2. Connect the repository in the Vercel Dashboard.
3. Vercel auto-detects settings. Click `Deploy`.

#### Method B: Vercel CLI

1. Install the CLI:

```bash
npm install -g vercel
```

2. Run from project root:

```bash
vercel
```

3. For final production release:

```bash
vercel --prod
```

### 3. Vercel SPA Routing Fix

Create `vercel.json` in the project root:

```json
{
	"rewrites": [
		{
			"source": "/:path*",
			"destination": "/index.html"
		}
	]
}
```

### 4. Common Fixes

- `404 on refresh`: Ensure `vercel.json` rewrite rule is present.
- `API errors`: Check that `VITE_API_URL` points to the production API, not localhost.
