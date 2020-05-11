import AxiosConfig from "../config";
import { URL } from '../config/constants'

export default class SignupService {
    constructor() {
        this.axiosConfig = new AxiosConfig
    }

    signupServiceRequest = async (data) => {
        var FULL_URL = `${URL}/user/createUser/`
        let result = await this.axiosConfig.makePostRequest(FULL_URL, data) 
        return result.data
    }
}