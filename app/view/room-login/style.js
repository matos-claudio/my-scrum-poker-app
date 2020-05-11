import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    viewLogo: {
        flex: 1, 
        justifyContent: "center", 
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

    fontSubtitle: {
        color: 'grey', 
        // fontWeight: "bold",
        opacity: 0.5,
        textAlign: "center"
    },

    viewFields: {
        flex: 1, 
        marginTop: 5,
        justifyContent: "flex-start"
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
    },
    picker: {
        width: '100%',  
        height: 45, 
        marginTop: 10 
    },
})