export async function signup(
  email: string,
  password: string,
  DoB: string,
  name: string,
  username: string,
) {
  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      DateOfBirth: DoB,
      name: name,
      username: username,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}
