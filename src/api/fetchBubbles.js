import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const fetchBubbles = () => {
  return axiosWithAuth()
    .get("/colors")
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error("FETCH ERROR: ", err, err.response);
      return err;
    });
};