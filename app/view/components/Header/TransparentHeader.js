import React from "react";
import { SafeAreaView, View, TouchableOpacity, Button } from "react-native";
import { Text } from "native-base";
import style from "../../../style/app";
import AvatarComponent from "../AvatarComponent";
import { createNameAvatar } from "../../../helper/helper";

const TransparentHeader = ({backgroundColor}) => {
  return (
    <SafeAreaView>
      <View transparent style={[ style.headerComponent,  { backgroundColor: '#9C56DE' }]}>
        <AvatarComponent avatar={createNameAvatar("Claudio Matos")} />
      </View>
    </SafeAreaView>
  );
};

export default TransparentHeader;
