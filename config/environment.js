const development = {
  name: "development",
  assets_path: "/assets",
  session_cookie_key: "blahsomething",
  db: "codeial_development",
  google_client_ID:
    "262663602225-oh4e8fl3rdbs588u5f9uat3b49q4s065.apps.googleusercontent.com",
  google_client_Secret: "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",
  google_callbackURL: "http://localhost:8000/users/auth/google/callback",
  jwt_secret_key: "tiger",
};
const production = {
  name: "production",
};
module.exports = development;
