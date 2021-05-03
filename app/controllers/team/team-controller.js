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
      teamPassword: this.apiUtilServices.convertPasswordMd5(data.teamPassword),
      teamDescription: data.teamDescription,
      createdBy: data.userName,
      createdAt: moment().format("DD/MM/YYYY"),
      members: [
        {
          userName: data.userName,
          userEmail: data.userEmail,
          userOffice: data.userOffice,
        },
      ],
    };
    try {
      await this.apiUtilServices.saveTeam(team);
      const teams = await this.getTeams();
      return teams;
    } catch (error) {
      const message = formatError(error.code);
      return formatResponse(null, message, true);
    }
  };

  getTeams = async () => {
    const teams = [];
    const teamResponse = await this.apiUtilServices.getTeams();
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

  saveUserTeam = async (teamName, teamPassword, user) => {
    const teamResponse = await this.apiUtilServices.getTeams();
    teamResponse.forEach((child) => {
      let fbTeamName = child.val().teamName;
      let fbTeamPassword = child.val().teamPassword;

      console.log(`SENHADB => ${child.val().teamPassword}`);
      console.log(`SENHAENV => ${teamPassword}`);
      console.log(`TEAMDB => ${child.val().teamName}`);
      console.log(`SENHAENV => ${teamName}`);
      console.log(`KEY => ${child.key}`);
      if (fbTeamName === teamName && fbTeamPassword === teamPassword) {
        const data = {
          userEmail: "juca@gmail.com",
          userName: "Juca",
          userOffice: "SM",
        };
        this.apiUtilServices.addMemberTeam(data, key);
      }
    });
  };

  convertPasswordMd5 = (password) =>
    this.apiUtilServices.convertPasswordMd5(password);
}
