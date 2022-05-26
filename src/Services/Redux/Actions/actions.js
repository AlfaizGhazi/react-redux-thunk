import axios from "axios";
import { ACTION_TYPES } from "../../Constants";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const getApiAction = () => {
  return async (dispatch, getState) => {
    const apiResponse = await axios.get(baseURL);
    const apiData = apiResponse.data;
    dispatch({
      type: ACTION_TYPES.API.GET,
      payload: {
        data: apiData,
      },
    });
  };
};
