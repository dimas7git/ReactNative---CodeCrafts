import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#00a' />
            <Quadrado cor='#f00' />
            <Quadrado cor='#0f0' />
            <Quadrado cor='#00f' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
    }
})