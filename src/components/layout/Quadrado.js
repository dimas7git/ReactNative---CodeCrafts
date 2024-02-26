import React from 'react';
import { Text, View } from 'react-native';
import Estilo from '../estilo';

export default props => {
    const tamanho = 50;
    return (
        <View style={{
            height: tamanho,
            width: tamanho,
            backgroundColor: props.cor || '#000'
        }} />
    )
}