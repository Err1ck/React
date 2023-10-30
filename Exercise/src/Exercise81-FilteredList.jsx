/* Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list. */
import { useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      {filteredList.map((item) => (
        <div key={item.id}>
          <p>Nombre: {item.name}</p>
          <p>Edad: {item.age}</p>
        </div>
      ))}
    </div>
  );
}
