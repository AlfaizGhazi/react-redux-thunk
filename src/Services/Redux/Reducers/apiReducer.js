import { ACTION_TYPES } from "../../Constants";

const initialState = {
  apiData: [],
  filterByOne: [],
};

export const apiState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.API.GET:
      return {
        apiData: payload.data,
      };

    case ACTION_TYPES.API.FILTER.USER_ONE:
      return { ...state, filterByOne: payload.data };

    default:
      return state;
  }
};
