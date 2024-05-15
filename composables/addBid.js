const url = "http://localhost:8080/bids";

export const addBid = async (formData, cb) => {
  const bidInfo = JSON.stringify(formData);
  console.log('bidInfo', bidInfo);

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
