import api from "../http";

export default class TaskService {
  static async getAllTasks(page = 1, network, type, status) {
    return api.get(`/tasks/`, {
      params: {
        page,
        network,
        type,
        status,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async getTask(id) {
    return api.get(`/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async takeTask(id) {
    return api.get(`/take_task/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async submitTask(id, file) {
    const form = new FormData();
    form.append("file", file);

    return api.post(`/make_task/${id}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
