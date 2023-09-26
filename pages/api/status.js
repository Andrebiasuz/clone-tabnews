// if status 200 then get json message in API

function status(request, response) {
  response.status(200).json({ key: "I love you bunny" }); // used Json because of charset
}

export default status; // export so next has access to it.
