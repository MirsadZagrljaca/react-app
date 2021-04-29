import axios from "axios";

const apiUrl = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const insert = (path, data, callback) => {
  console.log(data);
  data._id = undefined;
  axios
    .post(`${apiUrl}/${path}`, data, { headers })
    .then((response) => callback(response.data))
    .catch((reason) => {
      console.log(reason);
      callback(false);
    });
};

const list = (path, callBack) => {
  axios
    .get(`${apiUrl}/${path}`, { headers })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const read = (path, id, callBack) => {
  axios
    .get(`${apiUrl}/${path}/${id}`, { headers })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const update = (path, id, data, callBack) => {
  axios
    .put(`${apiUrl}/${path}/${id}`, data, { headers })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const remove = (path, id, callBack) => {
  axios
    .delete(`${apiUrl}/${path}/${id}`, { headers })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

export { insert, list, read, update, remove };
