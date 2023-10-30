/* Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list. */

import { FilteredList } from "./Exercise81-FilteredList";

export function App() {
  return (
    <FilteredList
      list={[
        { name: "Erick", id: 0, age: 27 },
        { name: "Alberto", id: 1, age: 17 },
        { name: "Sergio", id: 2, age: 55 },
        { name: "Marcos", id: 3, age: 18 },
        { name: "Isabel", id: 4, age: 47 },
        { name: "Maria", id: 5, age: 31 },
        { name: "Manuel", id: 6, age: 11 },
        { name: "Luis", id: 7, age: 21 },
        { name: "Anna", id: 8, age: 17 },
        { name: "Iker", id: 9, age: 19 },
      ]}
    />
  );
}
