import UAuth from "@uauth/js";

let uauth = undefined;

if (typeof window !== "undefined") {
  uauth = new UAuth({
    clientID: process.env.REACT_APP_UAUTH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_UAUTH_CLIENT_SECRET,
    scope: "openid email wallet",
    redirectUri: process.env.REACT_APP_UAUTH_REDIRECT_URI,
    postLogoutRedirectUri: process.env.REACT_APP_UAUTH_LOGOUT_REDIRECT_URI,
  });
}

export default uauth;
