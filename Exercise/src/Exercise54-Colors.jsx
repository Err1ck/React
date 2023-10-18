/* Modify the Colors component so that items is expected to be an array of objects each containing an id and a name property. Render the name property of each object within a li tag, and use the id as a key. */

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
}
