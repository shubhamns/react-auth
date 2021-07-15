export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("jwtToken"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
