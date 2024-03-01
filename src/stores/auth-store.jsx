import { makeAutoObservable } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
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

  stopStore() {
    stopPersisting(this);
  }

  login = async (data) => {
    try {
      /*  const res = await AuthService.login(data.email, data.password);

      if (res.status !== 200) {
        throw new Error(res);
      }

      const resData = await res.json(); */

      console.log(data);

      this.isAuthorized = true;
    } catch (error) {
      console.log(error);
    }
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
