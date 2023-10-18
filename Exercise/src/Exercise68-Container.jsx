/* Modify the Container component so that it can display a title received within the title prop. */

export function Container({ title }) {
  return <div className="app">{title}</div>;
}
