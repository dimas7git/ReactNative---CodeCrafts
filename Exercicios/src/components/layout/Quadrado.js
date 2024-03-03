import React from 'react';
import { Text, View } from 'react-native';

export default props => {
    const tamanho = props.lado || 5;
    return (
        <View style={{
            height: tamanho,
            width: tamanho,
            backgroundColor: props.cor || '#000'
        }} />
    )
}