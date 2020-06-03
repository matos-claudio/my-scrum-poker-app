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

    createStorieInTheRoom = async (request) => {
        var roomId = request.roomId
        var FULL_URL = `${URL}/room/insertHistoryForScore/${roomId}`
        return await this.axiosConfig.makePutRequest(FULL_URL, request)
    }

    insertHistoryPointValue = async (request) => {
        console.log(`REQUEST >>> ${JSON.stringify(request)}`)
        var roomId = request.roomId
        var FULL_URL = `${URL}/room/insertHistoryPointValue/${roomId}`
        return await this.axiosConfig.makePutRequest(FULL_URL, request)
    }

    openVotes = async (roomId) => {
        var FULL_URL = `${URL}/room/openVotes/${roomId}`
        return await this.axiosConfig.makePutRequest(FULL_URL, null)
    }

    endVotes = async (roomId) => {
        var FULL_URL = `${URL}/room/endStoryPunctuation/${roomId}`
        return await this.axiosConfig.makePutRequest(FULL_URL, null)
    }

    disconnectRoomMember = async (request) => {
        var roomId = request.roomId
        var FULL_URL = `${URL}/room/disconnectMember/${roomId}`
        return await this.axiosConfig.makePutRequest(FULL_URL, request)
    }

    forceConnectAndroidClient = async (request) => {
        var FULL_URL = `${URL}/room/forceConnectAndroidClient/`
        return await this.axiosConfig.makePostRequest(FULL_URL, request)
    }
}