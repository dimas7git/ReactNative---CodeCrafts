import React from 'react'
import { Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Mega Sena
                    {this.props.qtdeNumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}    
                    placeholder='Qtde de Números'
                    value={`${this.state.qtdeNumeros}`}
                    onChageText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}