import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default props => (
    <React.Fragment>
        <Text style={Style.fontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>

    // ou pode ser usado <> </> no lugar de <React.Fragment> </React.Fragment>
    // framgnets são usados para retornar mais de um componente
)