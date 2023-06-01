const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();

  return data;
};

export const POST = async (text) => {
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: text,
      userId: 1,
    }),
  }).then((res) => res.json());
};