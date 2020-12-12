import ApiUtilServices from "../../services/api-util-services";
import { formatResponse,  formatError} from '../../helper/helper';
import {
    MSG_ERROR_SAVE_USER,
    MSG_SUCCESS_SAVE_USER
} from '../../helper/constants'

export default class UserController {
    constructor(){
       this.apiUtilServices = new ApiUtilServices();
    }

    createUserWithEmailAndPasswordService = async (email, password, name) => {
        try {
            const userResponse = await this.apiUtilServices.createUserWithEmailAndPasswordService(email, password);
            const saveIsSuccess = await this.saveUser(userResponse, name);
            if(saveIsSuccess){
                return formatResponse(null, MSG_SUCCESS_SAVE_USER, false);
            }
            return formatResponse(null, MSG_ERROR_SAVE_USER, true);
        } catch (error) {
            const message = formatError(error.code);
            return formatResponse(null, message, true);
        }
    };

    signInWithEmailAndPassword = async (email, password) => {
        try {
            const user = await this.apiUtilServices.signInWithEmailAndPassword(email, password);
            console.log(`User ${JSON.stringify(user)}`)
        } catch (error) {
            const message = formatError(error.code);
            console.log(`Error ${JSON.stringify(error)}`)
            return formatResponse(null, message, true);
        }
    };

    saveUser = async ({ user }, name) => {
        try {
            const data = { active: true, email: user.email, name }
            await this.apiUtilServices.saveUser(data, user.uid);
            return true;
        } catch (error) {
            this.deleteUser();
            return false;
        }
    };

    deleteUser = () => this.apiUtilServices.deleteUser();

    onAuthStateChanged = async () => await this.apiUtilServices.onAuthStateChanged();

    getUser = async (UID) => await this.apiUtilServices.getUser(UID);
}