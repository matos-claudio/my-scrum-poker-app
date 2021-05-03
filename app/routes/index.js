import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import ViewSignup from "../view/signup/view-signup";
// import Poker from "../view/poker";
// import LoginRoom from "../view/room-login";
// import TeamDevStoriesList from "../view/room-team-dev/room-stories";
// import ProductOwnerStoriesList from "../view/product-owner/room-stories";
// import ViewTeamList from "../view/team/view-team-list";
import ViewLogin from "../view/login/view-login";
// import Menu from "../view/home/menu";
// import CriarTime from "../view/times/cria-time";
import ViewInitialLoad from "../view/initial-load/view-initial-load";
// import ViewCreateTeam from "../view/team/view-create-team";
// import ViewShareQrCode from "../view/team/view-share-qrcode";
// import ViewQrCodeReader from "../view/team/view-qrcode-reader";

const routes = createStackNavigator(
  {
    ViewInitialLoad: {
      screen: ViewInitialLoad,
    },
    // ViewQrCodeReader: {
    //   screen: ViewQrCodeReader,
    // },
    ViewLogin: {
      screen: ViewLogin,
    },
    // ViewSignup: {
    //   screen: ViewSignup,
    // },
    // CriarTime: {
    //   screen: CriarTime,
    // },
    // Menu: {
    //   screen: Menu,
    // },
    // ViewTeamList: {
    //   screen: ViewTeamList,
    // },
    // ViewCreateTeam: {
    //   screen: ViewCreateTeam,
    // },
    // LoginRoom: {
    //   screen: LoginRoom,
    // },
    // Poker: {
    //   screen: Poker,
    // },
    // TeamDevStoriesList: {
    //   screen: TeamDevStoriesList,
    // },
    // ProductOwnerStoriesList: {
    //   screen: ProductOwnerStoriesList,
    // },
    // ViewShareQrCode: {
    //   screen: ViewShareQrCode,
    // },
  },
  { headerMode: "null" }
);

const App = createAppContainer(routes);
export default App;
