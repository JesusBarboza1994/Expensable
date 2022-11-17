import { login, logout } from "./src/services/sessions-services.js"

const credentials = {
	"email": "test23@mail.com",
	"password": "123456s"
};

async function test(){
  try {
    const user = await login(credentials);
    console.log(user);

    const data = await logout();
    console.log(data);
  } catch (error) {
    
  }
}