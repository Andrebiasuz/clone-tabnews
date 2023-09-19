function status(request, response) {
  response.status(200).json({ key: "I love you bunny" });
}

export default status;
