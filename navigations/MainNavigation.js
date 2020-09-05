import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TabNavigation from './TabNavigation';
import DetailScreen from '../screens/Detail'
import { headerStyle } from "./config"

const MainNavigation = createStackNavigator(
    {
      Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
      Detail: {
          screen: DetailScreen,
          navigationOptions: {
              ...headerStyle,
          }
      }
    },
    {
        headerMode: "screen",  // createStackNavigation의 Screen이 일부는 헤더를 가지고, 일부는 헤더를 가지지 않을때 사용
        headerBackTitleVisible: false
    }
  );

 export default createAppContainer(MainNavigation);