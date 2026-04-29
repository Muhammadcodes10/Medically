export async function saveTicket(
  ticketId: string,
  name: string,
  age: string,
  treatment: string,
  date: string,

) {
  const response = await fetch("http://localhost:3000/saveTicket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ticketId,
      name,
      age,
      treatment,
      date
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save ticket");
  }
  return response.json();
}
