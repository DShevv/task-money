import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import UserService from "../services/UserService";
import authStore from "./auth-store";
import toast from "react-hot-toast";
import Notification from "../components/Notification/Notification";

class UserStore {
  user = {
    name: undefined,
    email: undefined,
    photo: undefined,
    invite_code: undefined,
    id: undefined,
  };
  authStore;

  constructor(authStore) {
    this.authStore = authStore;

    makeAutoObservable(this);
    makePersistable(this, {
      name: "UserStore",
      properties: ["user"],
      storage: window.localStorage,
    });
  }

  stopUserStore() {
    stopPersisting(this);
  }

  getInfo = async () => {
    try {
      const res = await UserService.getInfo();

      if (res.response && res.response.status === 401) {
        this.logout();
      }

      if (res.response && res.response.status !== 200) {
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

      runInAction(() => {
        this.user = {
          name: res.data.name,
          email: res.data.email,
          photo:
            res.data.photo !== null
              ? `${import.meta.env.VITE_API_URL}${res.data.photo}`
              : undefined,
          invite_code: res.data.invite_code,
          id: res.data.id,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  changePhoto = async (photo) => {
    try {
      const res = await UserService.changePhoto(photo);

      if (res.response.status === 401) {
        this.logout();
      }

      if (res.response.status !== 200) {
        toast.custom((toa) => (
          <Notification
            toa={toa}
            text={[res.response.data.detail]}
            status={res.response.status}
          />
        ));
        throw new Error(res);
      }

      this.getInfo();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  removePhoto = async () => {
    try {
      const res = await UserService.removePhoto();

      if (res.response.status === 401) {
        this.logout();
        return;
      }

      if (res.response.status !== 200) {
        toast.custom((toa) => (
          <Notification
            toa={toa}
            text={[res.response.data.detail]}
            status={res.response.status}
          />
        ));
        throw new Error(res);
      }

      this.getInfo();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    console.log("logout");
    this.user = {
      name: undefined,
      email: undefined,
      photo: undefined,
      invite_code: undefined,
      id: undefined,
    };
    authStore.logout();
  };
}

const userStore = new UserStore(authStore);

export default userStore;
