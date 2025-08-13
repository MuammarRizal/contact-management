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
      Accept: "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};

export const getUsers = async (token) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users/current`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const updateNameUser = async (token, { name }) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const updatePasswordUser = async (token, password) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      password,
    }),
  });
};
export const deleteUser = async (token) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/users/current`, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  });
};
