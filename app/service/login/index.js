import AxiosConfig from "../config"
import { URL } from '../config/constants'

export default class LoginService {
    constructor() {
        this.axiosConfig = new AxiosConfig()
    }

    loginServiceRequest = async (data) => {
        return await this.axiosConfig.makePostRequest(URL, data)
    }
}