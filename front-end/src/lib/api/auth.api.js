export const userRegister = async ({ username, name, password }) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      username,
      name,
      password,
    }),
  });
};

export const userLogin = async ({ username, password }) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
