/* Extract the li tag into a new component called Color and render it within the Colors component. */

export function Color({k}) {
  return <li>{k.name}</li>;
}
