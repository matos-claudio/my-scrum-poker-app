import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import {
  Container,
  Content,
  H1,
  H2,
  Text,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Button,
  Icon
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import TransparentHeader from "../components/Header/TransparentHeader";
import AvatarComponent from "../components/AvatarComponent";
import { createNameAvatar } from "../../helper/helper";

const datas = [
  {
    text: "Sankhadeep",
    note: "Its time to build a difference . .",
  },
  {
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . ",
  },
  {
    text: "Shivraj",
    note: "Time changes everything . .",
  },
  {
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!",
  },
  {
    text: "Himanshu",
    note: "Live a life style that matchs your vision",
  },
  {
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent",
  },
];

export default class ListaSala extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.primaryColor} />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <TransparentHeader backgroundColor={styles.primaryColor} />
        <View style={{flex: 1}}>
          <View style={styles.backgroundHeader}>
            <View style={styles.header}>
              <View style={styles.viewTitle}>
                <H2 style={[styles.h2, styles.labelWhite]}>Minhas equipes</H2>
                <Text style={styles.labelWhite}>Ver todas</Text>
              </View>
              <View style={styles.card}>
                <View
                  style={[
                    styles.padding,
                    { justifyContent: "space-between", flex: 1 },
                  ]}
                >
                  <Text style={[styles.h2, styles.font18, styles.labelGrey]}>
                    Equipe Arq3 DX
                  </Text>
                  <AvatarComponent avatar={createNameAvatar("Claudio Matos")} />
                  <Text style={[styles.labelGrey, { fontSize: 14 }]}>
                    7 membros neste time
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.recentActivities}>
            <H2 style={[styles.h2, styles.padding]}>Logado recentemente</H2>
            <Content>
              <List>
                {datas.map((data, i) => (
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={55} source={data.img} />
                    </Left>
                    <Body>
                      <Text>{data.text}</Text>
                      <Text numberOfLines={1} note>
                        {data.note}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="arrow-forward" />
                      </Button>
                    </Right>
                  </ListItem>
                ))}
              </List>
            </Content>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS == "android" ? "#9C56DE" : "#FFF",
  },
  primaryColor: {
    backgroundColor: "#9C56DE",
  },
  font18: {
    fontSize: 18,
  },
  labelWhite: {
    color: "#fff",
  },
  labelGrey: {
    color: "#424242",
  },
  padding: {
    padding: 20,
  },
  h2: {
    fontWeight: "bold",
  },
  viewTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  backgroundHeader: {
    backgroundColor: "#E9EBF6",
    flex: 0.7,
  },
  header: {
    backgroundColor: "#9C56DE",
    flex: 0.7,
    borderBottomLeftRadius: 100,
  },
  recentActivities: {
    backgroundColor: "#fff",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    height: 170,
    minWidth: 320,
    alignContent: "flex-end",
    marginHorizontal: 20,
    flex: 1,
    position: "absolute",
    top: 110,
    borderRadius: 15,
    shadowColor: "#616161",
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
