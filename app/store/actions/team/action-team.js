import { MY_TEAM_LIST } from "./action-types";

export const myTeamList = (teams) => {
  return { type: MY_TEAM_LIST, payload: teams };
};
