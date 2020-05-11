import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../view/login'
import Signup from '../view/signup'
import Poker from '../view/poker'
import LoginRoom from '../view/room-login'
import ScrumMasterStoriesList from '../view/scrum-master/room-stories'
import TeamDevStoriesList from '../view/room-team-dev/room-stories'

const routes = createStackNavigator({
  TeamDevStoriesList: {
    screen: TeamDevStoriesList
  },
  ScrumMasterStoriesList: {
    screen: ScrumMasterStoriesList
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
  // Login: {
  //   screen: Login
  // },
  Signup: {
    screen: Signup
  }
}, { headerMode: "null" })

const App = createAppContainer(routes)
export default App