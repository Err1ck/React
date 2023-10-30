import { Age } from "./Exercise88-Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome {name}</h1>
      <h2>
        Your Age is <Age age={age} />
      </h2>
    </div>
  );
}