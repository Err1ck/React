import { Children, useState } from "react";

/* Make the container collapsible, so that when the title is clicked the children are either hidden of shown again. Use the useState hook to keep track of the collapsed state. */
export function Container({ title, children }) {
  const [collapsable, setCollapsable] = useState(false);

  function handleToggleCollapsable() {
    setCollapsable((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-tittle">
        {title} <button onClick={handleToggleCollapsable}>Toggle</button>{" "}
      </div>
      {collapsable && <div className="app-content">{children}</div>}
    </div>
  );
}
