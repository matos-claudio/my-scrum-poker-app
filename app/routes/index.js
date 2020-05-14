import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../view/login'
import Signup from '../view/signup'
import Poker from '../view/poker'
import LoginRoom from '../view/room-login'
import ScrumMasterStoriesList from '../view/scrum-master/room-stories'
import TeamDevStoriesList from '../view/room-team-dev/room-stories'
import CreateStorie from '../view/scrum-master/room-create-storie'

const routes = createStackNavigator({
  Poker: {
    screen: Poker
  },
  Login: {
    screen: Login
  },
  LoginRoom : {
    screen: LoginRoom
  },
  Poker: {
    screen: Poker
  },
  Signup: {
    screen: Signup
  },
  TeamDevStoriesList: {
    screen: TeamDevStoriesList
  },
  ScrumMasterStoriesList: {
    screen: ScrumMasterStoriesList
  },
  CreateStorie: {
    screen: CreateStorie
  },
  // Login: {
  //   screen: Login
  // },
  Signup: {
    screen: Signup
  }
}, { headerMode: "null" })

const App = createAppContainer(routes)
export default App