import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { Container, Content, H2, Fab, Icon } from "native-base";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import TransparentHeader from "../components/Header/TransparentHeader";
import { CardListTeamsComponent } from "../components/CardListTeams/CardListTeamsComponent";
import TeamController from "../../controllers/team/team-controller";
import { ListEmptyComponent } from "../components/ListEmpty/ListEmptyComponent";

class ViewTeamList extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.myProps.navigate.navigation;
    this.teamController = new TeamController();
    this.state = {
      isLoading: true,
      teams: [],
    };
  }

  componentDidMount = () => {
    this.getTeams();
  };

  getTeams = async () => {
    const teams = await this.teamController.getTeams(this.props.userLogged.email);
    this.setState({ isLoading: false, teams: teams.data });
  };

  openCreateTeam = () => {
    this.navigation.navigate("ViewCreateTeam");
  };

  onPress = () => {
    alert("OK");
  };

  renderLoading = () => (
    <View style={styles.viewActivityIndicator}>
      <ActivityIndicator color="#e64a19"/>
    </View>
  );

  renderTeams = () => (
    <View style={styles.backgroundHeader}>
      <View style={styles.header}>
        <FlatList
          data={this.state.teams}
          style={{ top: 10 }}
          renderItem={({ item, index }) => (
            <CardListTeamsComponent
              key={index}
              item={item}
              onPress={() => this.onPress()}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmptyComponent />
          )}
        />
      </View>
    </View>
  );

  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.container} />
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <TransparentHeader backgroundColor={styles.container} />
        <View style={styles.viewTitle}>
          <H2 style={[styles.h2, styles.labelTitle]}>Minhas equipes</H2>
        </View>
        <Content transparent contentContainerStyle={{ flexGrow: 1 }}>
          {this.state.isLoading && this.renderLoading()}
          {!this.state.isLoading && this.renderTeams()}
        </Content>
        <Fab
          style={styles.fab}
          position="bottomRight"
          onPress={() => this.openCreateTeam()}
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
    flex: 1,
  },
  viewActivityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#f5f5f5",
    marginBottom: 30,
  },
  fab: {
    backgroundColor: "#e64a19",
  },
});

const mapStateToProps = ({ userLogged }) => {
  console.log(`USER ${JSON.stringify(userLogged)}`)
  return { userLogged: userLogged.user };
}

export default connect(mapStateToProps, null)(ViewTeamList);
