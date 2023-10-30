/* /* Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method. The hook should return the current location as well as a function to get the current location, and the error and loading states. The details on how to use this API can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */
import { useState, useEffect } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
      setLoading(false);
    }
  }, []);

  const getLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  };

  return { location, getLocation, error, loading };
}
