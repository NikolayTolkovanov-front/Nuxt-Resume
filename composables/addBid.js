const url = "http://localhost:3000/bids";

export const addBid = async (name, email, description, cb) => {
  const bidInfo = JSON.stringify({ name, email, description });

  await fetch(url, {
    method: "POST",
    body: bidInfo,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => cb(res))
    .catch((err) => cb(err.message));
};
