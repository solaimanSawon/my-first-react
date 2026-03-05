# Customer Support Zone

Customer Support Zone is a React + Vite project for Assignment-02. It helps support teams manage customer tickets by moving tasks from open to in-progress to resolved.

## Project Links

- Live Link: https://my-first-react-ashy.vercel.app/?_vercel_share=hZJn7vqrNPweNi96wIV0lHKZYVpqVZPa
- GitHub Repository: https://github.com/solaimanSawon/my-first-react

## What is JSX, and why is it used?

JSX (JavaScript XML) lets us write HTML-like UI code inside JavaScript. It is used because it makes components easier to read and maintain, and React converts it into JavaScript objects for rendering.

## What is the difference between State and Props?

- `Props` are read-only data passed from parent to child.
- `State` is mutable local data managed inside a component.
- Both can trigger re-renders when values change.

## What is the useState hook, and how does it work?

`useState` adds state to functional components.

```jsx
const [count, setCount] = useState(0)
```

- `count` is the current value.
- `setCount` updates the value.
- Updating state causes React to re-render the component.

## How can you share state between components in React?

- Lift state to a common parent and pass data/functions through props.
- Use Context API for deeper component trees.
- Use state libraries for large apps when needed.

## How is event handling done in React?

React uses camelCase event props and handler functions, such as `onClick`, `onChange`, and `onSubmit`. Handlers receive an event object and can call methods like `event.preventDefault()`.
