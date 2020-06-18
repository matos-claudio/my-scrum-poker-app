import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListaSala from "../sala/lista-sala";

const Tab = createBottomTabNavigator();

export default class Menu extends Component {
  HomeScreen() {
    return (
      <ListaSala/>
    );
  }

  SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "md-home";
              } else if (route.name === "Salas") {
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
          <Tab.Screen name="Home" component={this.HomeScreen} />
          <Tab.Screen name="Salas" component={this.SettingsScreen} />
          <Tab.Screen name="Times" component={this.SettingsScreen} />
          <Tab.Screen name="Perfil" component={this.SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
