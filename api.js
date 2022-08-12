import axios from "axios";

const BACKEND_PORT_NUMBER = "9000";
const serverUrl = "http://" + "localhost" + ":" + BACKEND_PORT_NUMBER + "/";
axios.defaults.baseURL = serverUrl;

async function get(endpoint, params = "") {
  // console.log(
  //   `%cGET 요청 ${serverUrl + endpoint + "/" + params}`,
  //   "color: #a25cd1;"
  // );

  return axios.get(endpoint + "/" + params);
}

export { get };
