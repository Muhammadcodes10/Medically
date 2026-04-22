export async function checkTreatment(
  location: { lat: number | null; lng: number | null },
  type: string,
) {
  const response = await fetch("http://localhost:3000/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lat: location.lat,
      lon: location.lng,
      type,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch nearest hospital");
  }
  return response.json();
}
