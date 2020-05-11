import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../view/login'
import Signup from '../view/signup'
import Poker from '../view/poker'

const routes = createStackNavigator({
  Login: {
    screen: Login
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