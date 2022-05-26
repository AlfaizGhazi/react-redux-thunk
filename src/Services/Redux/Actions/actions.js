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

export const filterByOneAction = (filteredId) => {
  return async (dispatch, getState) => {
    const apiResponse = await axios.get(baseURL);
    const apiData = apiResponse.data;
    const filteredByOneData = apiData.filter(
      (data) => filteredId === data.userId
    );
    dispatch({
      type: ACTION_TYPES.API.FILTER.USER_ONE,
      payload: {
        data: filteredByOneData,
      },
    });
  };
};
