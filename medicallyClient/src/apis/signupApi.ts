export async function SignupApi(
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
    const errorData = await response.json();
    throw new Error( "User already exists");
  }
  if (response.status === 200) {
    return await response.json();
  }
}
