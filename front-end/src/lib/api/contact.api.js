export const getAllContacts = async (token) => {
  return await fetch(
    `${import.meta.env.VITE_URL_API_CONTACT}/contacts?page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    }
  );
};

export const createContact = async (
  token,
  { first_name, last_name, email, phone }
) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      phone,
    }),
  });
};
