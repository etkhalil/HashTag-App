import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { ThemeProvider } from 'react-native-elements'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
})

const App = createAppContainer(MainNavigator)

export default App