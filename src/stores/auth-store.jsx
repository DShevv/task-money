import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import AuthService from "../services/AuthService";
import toast from "react-hot-toast";
import Notification from "../components/Notification/Notification";

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
      console.log(res);
      if (res.status !== 200) {
        toast.custom((toa) => (
          <Notification
            toa={toa}
            text={[res.response.data.detail]}
            status={res.response.status}
          />
        ));
        throw new Error(res);
      }

      localStorage.setItem("token", `Bearer ${res.data.access_token}`);
      runInAction(() => {
        this.token = `${res.data.token_type} ${res.data.access_token}`;

        this.isAuthorized = true;
      });
    } catch (error) {
      console.log(error.data);
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

      if (res.status !== 200) {
        toast.custom((toa) => (
          <Notification
            toa={toa}
            text={[res.response.data.detail]}
            status={res.response.status}
          />
        ));
        throw new Error(res);
      }

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
