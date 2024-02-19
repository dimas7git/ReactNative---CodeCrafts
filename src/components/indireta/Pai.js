import React from 'react';
import { Text } from 'react-native';
import Filho from './Filho';
import estilo from '../estilo';

export default props => {
    const  [texto, setTexto] = React.useState('')
    const  [num, setNum] = React.useState(0)
    
    function exibirValor(numero){
        setNum(numero)
        setTexto(texto)
    }
    
    return (
        <>
            <Text style={estilo.fontG}>{texto} {num}</Text>
            <Filho min={1} max={60} funcao={exibirValor}/>
        </>
    )
}