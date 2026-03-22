export async function checkLogin(email: string, password: string) {
await fetch("http://localhost:3000/checkLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
}