export async function checkLogin(email: string, password: string) {
  const response = await fetch("http://localhost:3000/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  if (!response.ok) {
    throw new Error("Failed to send user login information");
  }

  return response.json();
}