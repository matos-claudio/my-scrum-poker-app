import AxiosConfig from "../config";
import { URL } from '../config/constants'

export default class RoomService {
    constructor(){
        this.axiosConfig = new AxiosConfig()
    }

    createOrLoginUserInTheRoom = async (request) => {      
        var createRoom = {
            roomName: request.data.room.roomName,
            roomPassword: request.data.room.roomPassword,
            createdBy: request.data.room.createdBy,
            itsActive: true,
            members: [
                {
                    email: request.data.member.email,
                    name: request.data.member.name,
                    avatar: request.data.member.avatar,
                    office: request.data.member.office,
                }
            ]
        }
        var FULL_URL = `${URL}/room/createRoom/`
        return await this.axiosConfig.makePostRequest(FULL_URL, createRoom)
    }
}