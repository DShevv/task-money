import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import AuthService from "../services/AuthService";

class AuthStore {
  isAuthorized = false;
  token = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "AuthStore",
      properties: ["isAuthorized", "token"],
      storage: window.localStorage,
    });
  }

  stopStore() {
    stopPersisting(this);
  }

  login = async (data) => {
    try {
      const res = await AuthService.login(data.email, data.password);

      if (res.status !== 200) {
        throw new Error(res);
      }

      console.log(res);
      localStorage.setItem("token", `Bearer ${res.data.access_token}`);
      runInAction(() => {
        this.token = `${res.data.token_type} ${res.data.access_token}`;

        this.isAuthorized = true;
      });
    } catch (error) {
      console.log(error);
    }
  };

  register = async (data) => {
    try {
      const res = await AuthService.register(
        data.name,
        data.email,
        data.password,
        data.invite_code
      );
      console.log(res);
      return res.status;
    } catch (error) {
      console.log(error);
    }
  };

  forgot = (data) => {
    AuthService.resetPassword(data.email);
  };

  logout = () => {
    this.isAuthorized = false;
    this.token = null;
    localStorage.removeItem("token");
  };
}

const authStore = new AuthStore();

export default authStore;
