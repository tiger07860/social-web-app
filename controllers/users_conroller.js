module.exports.profile = function (req, res) {
  return res.render("profile", {
    title: "profile",
  });
};

module.exports.contact = function (req, res) {
  return res.end("<h1>98323293289</h1>");
};
