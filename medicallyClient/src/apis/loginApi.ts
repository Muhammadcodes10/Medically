export default async function LoginApi(username: string, password: string) {
  const response = await fetch("http://localhost:3000/checkLogin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return response.json();
}
