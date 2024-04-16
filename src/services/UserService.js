import api from "../http";

export default class UserService {
  static async getInfo() {
    return api.get("/me", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async changePhoto(photo) {
    const form = new FormData();
    form.append("file", photo);

    return api.post("/upload_photo", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async removePhoto() {
    return api.post("/remove_photo", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
