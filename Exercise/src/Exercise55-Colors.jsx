/* Extract the li tag into a new component called Color and render it within the Colors component. */

import { Color } from "./Exercise55-Color";

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} k={color} />
      ))}
    </ul>
  );
}
