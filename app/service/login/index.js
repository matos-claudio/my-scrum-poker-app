import AxiosConfig from "../config"
import { URL } from '../config/constants'

export default class LoginService {
    constructor() {
        this.axiosConfig = new AxiosConfig()
    }

    loginServiceRequest = async (data) => {
        let FULL_URL = `${URL}/login/auth/`
        return await this.axiosConfig.makePostRequest(FULL_URL, data)
    }
}