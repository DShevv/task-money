import api from "../http";

export default class TaskService {
  static async getAllTasks(page = 1, network, type) {
    return api.get(`/tasks/`, {
      params: {
        page,
        network,
        type,
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
}
