### Name of Project

**Dev Stack**

### Description

Dev Stack is a modern web application designed to help developers explore, compare, and select technologies to construct their ideal software stack.

### Technologies

* React

* TypeScript

* Vite

* Tailwind CSS

* DaisyUI

* React Icons

* React Toastify

### 3 features about my project

* Browse frontend, backend, database, and tooling technologies.

* Add and remove technologies to build a personal stack.

* Responsive design for desktop and mobile devices.

---

### What is JSX, and why is it used in React?

JSX allows developers to write HTML directly inside JavaScript, making React component templates much simple and easier to read.

### What is the difference between props and state?

Props pass read-only data into a component from the outside, while State manages dynamic data inside a component that changes based on user interactions.

### What does the `useState` hook do, and where is it used in this project?

The useState hook stores and updates component-level data, which in this project manages the list of selected technologies and tracks button toggles.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?

The useEffect hook runs side-effect operations when a component loads, allowing JSON data to be fetched once without triggering infinite re-render loops.

### Why does every item in a `.map()` list need a unique `key` prop?

Unique key props give each list item a distinct identity so React can efficiently track additions, removals, and updates without rendering bugs

### What is conditional rendering? Show one place you used it (example: the empty stack message)

Conditional rendering displays specific UI elements only when certain criteria are met, such as rendering 

```tsx
{selectedTechnology.length > 0 && <button>Remove All</button>}
```

only when selected items exist.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data goes from a parent to a child component using props, while data moves from a child to a parent by calling a function passed down through those props.


