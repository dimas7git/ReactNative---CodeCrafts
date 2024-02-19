import React, { useState } from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo";

export default  ({inicial=0, passo=1}) =>{
    const [numero, setNumero] = useState(inicial)
    //o useState retorna um array com 2 elementos, o primeiro é o valor atual e o segundo é uma função que atualiza o valor atual
    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}
