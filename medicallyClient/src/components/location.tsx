import  useGeolocation  from "../hooks/useGeolocation";

function Check() {
  const { location, loading, error } = useGeolocation();

  if (loading) return <p>Getting your location...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>lng: {location.lng}</h2>
      <h2>Lat {location.lat}</h2>
    </>
  );
}

export default Check;