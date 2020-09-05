// '19.10.24 아래 라이브러리를 추가설치해야 네비게이션 작동
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
// React Native 개발환경이 빠르게 변하기 때문에 달라질 수 있다..
// 그래도 안되면 구글링 & React navigation 공식문서 참고, https://reactnavigation.org/en/
import React from 'react'   // JSX 문법 사용.
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import MoviesScreen from "../screens/Movies"
import TVScreen from '../screens/TV'
import SearchScreen from '../screens/Search'

import { BG_COLOR } from '../constants/Colors'
import { createStack } from './config'

const TabNavigation = createBottomTabNavigator({
    Movies : {
        screen: createStack(MoviesScreen, "Movies"),
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film"} />
            },
        }
    },
    TV : {
        screen: createStack(TVScreen, "TV"),
        navigationOptions : {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} />
            ),
        }
    },
    Search : {
        screen: createStack(SearchScreen, "Search"),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
            )
        }
    }
},{
    initialRouteName: "Search",
    tabBarOptions :{
        showLabel: false,
        style: {
            backgroundColor: BG_COLOR
        }
    }
})

export default createAppContainer(TabNavigation);