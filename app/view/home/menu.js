import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ViewTeamList from "../team/view-team-list";
import ListaTimes from "../times/lista-times";
import ViewQrCodeReader from "../team/view-qrcode-reader";

const Tab = createBottomTabNavigator();

let pros = null;

export default class Menu extends Component {

  constructor(props){
    super(props)
  }

  HomeScreen() {
    return (
      <ViewTeamList />
    );
  }

  SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  TeamsScreen(){
    return (
      <ListaTimes/>
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Equipes") {
                iconName = focused ? "md-contacts" : "md-contacts";
              } else if (route.name === "Ler QRCode") {
                iconName = focused ? "ios-qr-scanner" : "md-qr-scanner";
              } else if (route.name === "Times") {
                iconName = focused ? "md-contacts" : "md-contacts";
              } else if (route.name === "Perfil") {
                iconName = focused ? "md-contact" : "md-contact";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#9C56DE",
            inactiveTintColor: "gray",          
          }}>
          <Tab.Screen name="Equipes" component={() => <ViewTeamList myProps={{ navigate: this.props }} />} />
          <Tab.Screen name="Ler QRCode" component={() => <ViewQrCodeReader myProps={{ navigate: this.props }}/>} />
          <Tab.Screen name="Times" component={this.TeamsScreen} />
          <Tab.Screen name="Perfil" component={this.SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
