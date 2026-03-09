// hooks/useGeolocation.ts

import { useState, useEffect } from "react";

interface Location {
  lat: number ;  //This was lat : number | null
  lng: number ; // This was lng : number | null
}

function useGeolocation() {
  const [location, setLocation] = useState<Location>({
    lat: 0, // This was lat : null
    lng: 0  //This was lng : null
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