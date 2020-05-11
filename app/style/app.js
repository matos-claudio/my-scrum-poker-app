import { StyleSheet } from 'react-native'

export default globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerComponent: {
        flexDirection: "row",
        minHeight: 50,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Platform.OS == "ios" ? 0 : 35,
        marginBottom: Platform.OS == "ios" ? 10 : 0,
        // marginHorizontal: 15,
        // backgroundColor: 'red'
    }, 
    buttonHeaderComponent: {
        flexDirection: "row",
        alignItems: "center",
    },
    labelTitleHeaderComponent: {
        fontSize: 22,
        marginLeft: 10,
        color: '#000',
        fontWeight: "bold"
    },
    viewAvatar: {
        width: 50, 
        height: 50, 
        backgroundColor: '#e64a19', 
        borderRadius: 60 / 2, 
        alignItems: "center", 
        justifyContent: "center",
        marginRight: 5,
        marginBottom: 5
    },

    fontMyAvatar: {
        color: '#fff',
        fontWeight: "bold", 
        fontSize: 18
    },

    marginHorizontal: {
        marginHorizontal: 20
    },

    primaryButton: {
        backgroundColor: '#6a1b9a', 
        height: 45, 
        justifyContent: "center", 
        borderRadius: 5 
    },

    primaryButtonLabel: {
        alignSelf: "center", 
        fontWeight: "bold", 
        color: '#fff'        
    },

    logo: {
        width: 300, 
        height: 200
    },

    labelButtonLoginSignup: {
        alignSelf: "center", 
        fontWeight: "bold", 
        color: '#e64a19'
    },

    avatarViewList: {
        width: 50, 
        height: 50, 
        backgroundColor: '#fff', 
        borderRadius: 60 / 2,
        borderWidth: 3,
        borderColor: 'grey', 
        alignItems: "center", 
        justifyContent: "center",
        marginRight: 5,
        marginBottom: 5
    },

    fontViewAvatar: {
        color: 'grey',
        fontWeight: "bold", 
        fontSize: 18
    },
})