const { default: axiosClient } = require("./axiosClient");

const authApi = {
  register: (params) => axiosClient.post("auth/register", params),
  login: (params) => axiosClient.post("auth/login", params),
  verifyToke: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
