import React from "react";
import { H3 } from "native-base";
import { StyleSheet } from 'react-native'

const RoomNameComponent = ({ roomName }) => {
    return(
        <H3 style={styles.h3}>{roomName}</H3>
    )
}


const styles = StyleSheet.create({
    h3: {
        color: "grey", 
        fontWeight: "bold"
    }
})

export default RoomNameComponent