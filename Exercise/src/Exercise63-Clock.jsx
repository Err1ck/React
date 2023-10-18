/* Install the sass package and use SCSS to style your Clock component. */
import classes from "./Exercise63-Clock.module.scss"
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <h2 className={classes.clock}>Current Time: {time.toLocaleTimeString()}</h2>;
}
