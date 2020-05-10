import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    viewLogo: {
        flex: 1, 
        justifyContent: "flex-end", 
        alignItems: "center"
    },
    logo: {
        width: 300, 
        height: 200
    },
    fontTitle: {
        color: 'grey', 
        fontWeight: "bold",
        opacity: 0.5
    },

    viewFields: {
        flex: 1, 
        justifyContent: "center"
    },

    textInput: {
        backgroundColor: '#fff', 
        height: 45, 
        borderWidth: 0.3, 
        padding: 5, 
        borderColor: 'grey', 
        borderRadius: 5, 
        color: 'grey'
    },

    viewButtons: {
        backgroundColor: '#fff', 
        flex: 1, 
        justifyContent: "space-around"
    },

    buttonLogin: {
        backgroundColor: '#6a1b9a', 
        height: 45, 
        justifyContent: "center", 
        borderRadius: 5 
    },

    labelButtonLogin: {
        alignSelf: "center", 
        fontWeight: "bold", 
        color: '#fff'
    },

    viewButtonSignup: {
        flexDirection: "row", 
        justifyContent: "center" 
    },
    
    labelSignup: {
        alignSelf: "center", 
        fontWeight: "bold", 
        color: 'grey'
    },

    labelButtonSignup: {
        alignSelf: "center", 
        fontWeight: "bold", 
        color: '#e64a19'
    }
})