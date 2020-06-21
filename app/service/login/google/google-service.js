import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID = "605178659127-net19bu4mqmr7ma58t5vb62blhf6k7vl.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "605178659127-unqlgb32hqf4ksm9ofbu3anfjoiat3v3.apps.googleusercontent.com";

export default class GoogleService {

    signInWithGoogle = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await Google.logInAsync({ iosClientId: IOS_CLIENT_ID, androidClientId: ANDROID_CLIENT_ID, scopes: ["profile", "email"] });
                if(result.type === 'success'){
                    console.log(`Login >>> ${JSON.stringify(result)}`)
                    return result.accessToken;
                } else {
                    
                }
            } catch (error) {
                console.log(`Error >>> ${JSON.stringify(error)}`)
            }
        })
    }

    logoutGoogle = () => {
        return new Promise(async(resolve, reject) => {

        })
    } 

    response = (code, data,  message) => {
        return { code, data, message };
    }
}