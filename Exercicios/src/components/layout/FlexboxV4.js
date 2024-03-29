import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default props => {
    return (
        <View style={style.FlexV1}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flex: 1,
        width: 100,
        backgroundColor: '#000',
    }
    ,V0:{
        backgroundColor: '#36c9a7',
        height: 300,
    }
    ,V1:{
        backgroundColor: '#ff801a',
        flex: 9,
    }
    ,V2:{
        backgroundColor: '#dd22c1',
        flex: 1,
    }
})