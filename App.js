import React from 'react';
import { AppLoading } from 'expo'               // 앱실행시 로딩화면 설정
import * as Font from 'expo-font'               // 사용할 폰트 preLoading
import { Asset } from 'expo-asset'              // 아이콘 등 preLoading
import { Ionicons } from "@expo/vector-icons"   // 아이콘 Ionicons가 md- ios- 두 플랫폼 지원해서 선호.
import MainNavigation from './navigations/MainNavigation'
import  { StatusBar } from 'react-native'

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // 아이콘 필요하면...
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ])
  }

  render() {
    const { loaded } = this.state;

    if (loaded) {
      return (
        <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
        </>
      );
    } else {
      return (
        <AppLoading 
          startAsync={this.loadAssets} 
          onFinish={this.handleLoaded} 
          onError={this.handleError} 
        />
      );
    } 
  }
}
