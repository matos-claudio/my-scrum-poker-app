import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Platform, FlatList } from "react-native";
import { Container, Content, H2, Text, Fab, Icon, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import TransparentHeader from "../components/Header/TransparentHeader";
import { CardListTeamsComponent } from "../components/CardListTeams/CardListTeamsComponent";

const datas = [
  {
    text: "Equipe Arq3",
    note: "Its time to build a difference",
    members: 10,
  },
  {
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . ",
    members: 10,
  },
  {
    text: "Shivraj",
    note: "Time changes everything . .",
    members: 5,
  },
  {
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!",
    members: 1,
  },
  {
    text: "Himanshu",
    note: "Live a life style that matchs your vision",
    members: 9,
  },
  {
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent",
    members: 15,
  },
];

export default class ViewTeamList extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    // this.firebaseService.storeHighScore(1, 33)
    // this.firebaseService.setupHighscoreListener(1)
  };

  componentDidUpdate = () => {
    // this.firebaseService.setupHighscoreListener(1)
  };

  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.container} />
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <TransparentHeader backgroundColor={styles.container} />
        <View style={styles.viewTitle}>
          <H2 style={[styles.h2, styles.labelTitle]}>Minhas equipes</H2>
          <Text style={styles.labelTitle}>Ver todas</Text>
        </View>
        <Content transparent contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.backgroundHeader}>
            <View style={styles.header}>
              <FlatList
                data={datas}
                style={{ top: 10 }}
                renderItem={({ item, index }) => <CardListTeamsComponent />}
              />
            </View>
          </View>
        </Content>
        <Fab
          style={styles.fab}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-add" />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  labelTitle: {
    color: "#000",
  },
  labelGrey: {
    color: "#424242",
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
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    backgroundColor: "#f5f5f5",
    marginBottom: 30,
  },
  fab: {
    backgroundColor: "#e64a19"
  }
});
