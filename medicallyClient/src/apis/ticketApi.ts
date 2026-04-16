export async function saveTicket(
  name: string,
  email: string,
  treatment: string,
  date: string,
  
) {
  const response = await fetch("http://localhost:3000/saveTicket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      treatment,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save ticket");
  }
  return response.json();
}
