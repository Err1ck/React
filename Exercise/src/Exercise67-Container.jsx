/* Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss. */
export function Container({ children }) {
  return <div className="app">{children}</div>;
}
