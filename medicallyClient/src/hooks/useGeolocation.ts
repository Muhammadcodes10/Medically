// hooks/useGeolocation.ts

import { useState, useEffect } from "react";

interface Location {
  lat: number | null;
  lng: number  | null;
}

function useGeolocation() {
  const [location, setLocation] = useState<Location>({
    lat: 29.233,
    lng: 33.22
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
}

export default useGeolocation;