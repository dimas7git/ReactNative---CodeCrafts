import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#00a' lado={20}/>
            <Quadrado cor='#f00' lado={30}/>
            <Quadrado cor='#0f0' lado={40}/>
            <Quadrado cor='#00f' lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',

        backgroundColor: '#000',
    }
})