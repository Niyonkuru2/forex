const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const add = async (data) => {
  const token = localStorage.getItem("token"); // get JWT from localStorage

  const res = await fetch(`${BASE_URL}/api/trade/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, //send token here
    },
    body: JSON.stringify(data),
  });

  return res.json();
};



