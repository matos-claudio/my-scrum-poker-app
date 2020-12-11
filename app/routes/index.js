import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ViewSignup from '../view/signup/view-signup'
import Poker from '../view/poker'
import LoginRoom from '../view/room-login'
import TeamDevStoriesList from '../view/room-team-dev/room-stories'
import CreateStorie from '../view/scrum-master/room-create-storie'
import ProductOwnerStoriesList from '../view/product-owner/room-stories'
import ViewListaSala from '../view/team/view-team-list'
import ViewLogin from '../view/login/view-login'
import Menu from '../view/home/menu'
import CriarTime from '../view/times/cria-time'
import ViewInitialLoad from '../view/initial-load/view-initial-load'
import ViewCreateTeam from '../view/team/view-create-team'

const routes = createStackNavigator({
  ViewCreateTeam: {
    screen: ViewCreateTeam
  },
  ViewLogin: {
    screen: ViewLogin
  },
  ViewInitialLoad : {
    screen: ViewInitialLoad
  },
  ViewSignup: {
    screen: ViewSignup
  },
  CriarTime: {
    screen: CriarTime
  },
  Menu: {
    screen: Menu
  },
  ViewListaSala: {
    screen: ViewListaSala
  },
  LoginRoom : {
    screen: LoginRoom
  },
  Poker: {
    screen: Poker
  },
  TeamDevStoriesList: {
    screen: TeamDevStoriesList
  },
  
  ProductOwnerStoriesList: {
    screen: ProductOwnerStoriesList
  },

  CreateStorie: {
    screen: CreateStorie
  },
}, { headerMode: "null" })

const App = createAppContainer(routes)
export default App