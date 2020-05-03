import { StyleSheet } from 'react-native'

export default globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerComponent: {
        flexDirection: "row",
        minHeight: 80,
        alignItems: "center",
        marginTop: Platform.OS == "ios" ? 0 : 20,
        marginBottom: Platform.OS == "ios" ? 10 : 0,
        marginHorizontal: 15
    }, 
    buttonHeaderComponent: {
        flexDirection: "row",
        alignItems: "center",
    },
    labelTitleHeaderComponent: {
        fontSize: 20,
        marginLeft: 10,
        color: '#000',
        fontWeight: "bold"
    }
})