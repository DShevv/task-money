import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return api.post(
      "/token",
      {
        username: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  static async register(name, email, password, invite_code) {
    return api.post(
      "/register",
      {
        name,
        email,
        password,
        invite_code,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async resetPassword(email) {
    return api.post("/forgot", {
      email: email,
    });
  }
}
