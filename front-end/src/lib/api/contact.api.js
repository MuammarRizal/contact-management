export const getAllContacts = async (token, page) => {
  return await fetch(
    `${import.meta.env.VITE_URL_API_CONTACT}/contacts?page=${page}`,
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

export const getContactById = async (token, id) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/contacts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
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

export const editContact = async (token, contact) => {
  return await fetch(
    `${import.meta.env.VITE_URL_API_CONTACT}/contacts/${contact.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone,
      }),
    }
  );
};
export const deleteContact = async (token, id) => {
  return await fetch(`${import.meta.env.VITE_URL_API_CONTACT}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};
