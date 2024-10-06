const url = "http://localhost:8000/bids";

export const addBid = async (formData, cb) => {
  const bidInfo = JSON.stringify(formData);

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
