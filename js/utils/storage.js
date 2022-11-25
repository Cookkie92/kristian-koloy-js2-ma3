const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}
export function getToken() {
  return retrieveStorage();
}
export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = retrieveStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function retrieveStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
