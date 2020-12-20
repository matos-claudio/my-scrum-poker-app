import { MY_TEAM_LIST } from "../../actions/team/action-types";

const initalState = {
  teams: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case MY_TEAM_LIST:
      return { ...state, teams: action.payload };
    default:
      return state;
  }
};

export default reducer;
