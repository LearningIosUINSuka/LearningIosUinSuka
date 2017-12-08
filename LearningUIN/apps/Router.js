import {StackNavigator, TabNavigator} from 'react-navigation'
import Login from './Login'
import {Home} from './Home'

export const Stack = StackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Home:{
        screen:Home,
        navigationOptions:{
            header:null
        }
    }
    
})