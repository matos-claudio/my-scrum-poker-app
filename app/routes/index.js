import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Signup from '../view/signup'
import Poker from '../view/poker'
import LoginRoom from '../view/room-login'
import ScrumMasterStoriesList from '../view/scrum-master/room-stories'
import TeamDevStoriesList from '../view/room-team-dev/room-stories'
import CreateStorie from '../view/scrum-master/room-create-storie'
import ProductOwnerStoriesList from '../view/product-owner/room-stories'
import ListaSala from '../view/sala/lista-sala'
import Login from '../view/login/login'
import Menu from '../view/home/menu'

const routes = createStackNavigator({
  Menu: {
    screen: Menu
  },
  Login: {
    screen: Login
  },
  ListaSala: {
    screen: ListaSala
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
  
  ProductOwnerStoriesList: {
    screen: ProductOwnerStoriesList
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