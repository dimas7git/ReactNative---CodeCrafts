import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Estilo from './estilo';

export default props =>{
    const [nome, setNome] = useState('Teste')
    return(
        <View>
            <Text>Nome: {nome}</Text>
            <TextInput placeholder="Digite seu nome" value={nome} onChangeText={nome => setNome(nome)}/>
        </View>
    )
}

// Componente controlado é um componente que tem o valor controlado pelo estado do componente