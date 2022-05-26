import { ACTION_TYPES } from "../../Constants";

const initialState = {
  apiData: [],
};

export const apiState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.API.GET:
      const { data } = payload;
      return {
        apiData: data,
      };

    default:
      return state;
  }
};
