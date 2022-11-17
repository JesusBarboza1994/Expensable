import apiFetch from "./api-fetch.js";
import { tokenKey } from "../config.js"

export async function createUser(newUser = {email, password, first_name, last_name, phone}){
  const { token, ...user } = await apiFetch("signup", {body: newUser});
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(data = {email, password, first_name, last_name, phone}){
  const { token, ...user } = await apiFetch("profile", {method: "PATCH", body: data});
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser(){
  const { token, ...user } = await apiFetch("profile");
  sessionStorage.setItem(tokenKey, token);
  return user;
}