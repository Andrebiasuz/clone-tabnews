function status(request, response) {
  response.send(200).json({ key: "I love you bunny" });
}

export default status;
