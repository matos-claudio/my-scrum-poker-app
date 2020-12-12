import moment from "moment";
import ApiUtilServices from "../../services/api-util-services";
import { formatResponse, formatError } from "../../helper/helper";
import {
  MSG_ERROR_SAVE_USER,
  MSG_SUCCESS_SAVE_USER,
} from "../../helper/constants";

export default class TeamController {
  constructor() {
    this.apiUtilServices = new ApiUtilServices();
  }

  saveTeam = async (data) => {
    const team = {
      teamName: data.teamName,
      teamPassword: data.teamPassword,
      teamDescription: data.teamDescription,
      createdBy: data.emailUser,
      createdAt: moment().format("DD/MM/YYYY"),
    };
    try {
      const teamResponse = await this.apiUtilServices.saveTeam(team);
      console.log(`team ${JSON.stringify(teamResponse)}`);
      return formatResponse(teamResponse);
    } catch (error) {
      const message = formatError(error.code);
      return formatResponse(null, message, true);
    }
  };

  getTeams = async (emailUser) => {
    const teams = [];
    const teamResponse = await this.apiUtilServices.getTeams(emailUser);
    teamResponse.forEach((child) => {
      teams.push({
        key: child.key,
        createdBy: child.val().createdBy,
        teamDescription: child.val().teamDescription,
        teamName: child.val().teamName,
      });
    });
    return formatResponse(teams, "OK", false);
  };
}
