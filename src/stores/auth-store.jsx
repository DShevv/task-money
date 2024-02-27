import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import AuthService from "../services/AuthService";

class AuthStore {
  isAuthorized = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "AuthStore",
      properties: ["isAuthorized"],
      storage: window.localStorage,
    });
  }

  login = async (data) => {
    /*  const res = await AuthService.login(data.email, data.password);
    const resData = await res.json(); */

    console.log(data);

    this.isAuthorized = true;
  };

  register = (data) => {
    AuthService.register(data.email, data.password);
  };

  forgot = (data) => {
    AuthService.resetPassword(data.email);
  };

  logout = () => {
    this.isAuthorized = false;
  };
}

const authStore = new AuthStore();

export default authStore;
