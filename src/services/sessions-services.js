const BASE_URI = "http://localhost:3000"
const tokenKey = "expensable_token"

async function login(credentials = {email, password}){
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials)
  })

  if(!response.ok) {
    const {errors} = await response.json();
    throw new Error(errors);
  }
  const data = await response.json();
  sessionStorage.setItem(tokenKey, data.token);
  
  return data;
}

async function logout(){
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/logout`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${token}`,
      "Content-Type": "application/json",
    }
  });

  let data
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText
  }

  if(!response.ok) {
    throw new Error(data.errors);
  }

  data = await response.json();
  sessionStorage.removeItem(tokenKey);
  
  return data;
}

export { login, logout }