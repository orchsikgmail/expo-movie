import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { BG_COLOR } from '../constants/Colors';
// import styled from 'styled-components'

export default () => {
    return (
        <>
        <View style={style.Container}>
            <ActivityIndicator />
        </View>
        {/* <Container>
            <ActivityIndicator />
        </Container> */}
        </>
    )
}

const style = StyleSheet.create({
    Container : {
        flex: 1,
        backgroundColor: BG_COLOR,
        justifyContent: "center"
    }
})

// 2가지 방법이 있는데 StyleSheet 자동완성기능이 좋아서 위에꺼 씀.
// const Container = styled.View`
//     flex: 1;
//     background-color: ${BG_COLOR};
//     justify-content: center;
// `;