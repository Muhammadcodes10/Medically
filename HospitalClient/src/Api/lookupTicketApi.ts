export async function lookupTicket(ticketId: string) {
  const response = await fetch(
    `http://localhost:3000/lookupTicket?ticketId=${ticketId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error("Ticket not found");
  }
  return response.json();
}
