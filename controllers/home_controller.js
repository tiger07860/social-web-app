module.exports.home = function (req, res) {
  // return res.end("<h1>Express is Up For Codial</h1>");

  console.log(req.cookies);
  res.cookie('user_id',25);
  res.cookie('csrftoken','drXbxlseX2O0OGajPlEpljz7QwDhsjh2YmEWTjeHfNBsHhpf3AzaGZMwN1hIufFL');

  return res.render("home", {
    title: "Home",
  });
};
