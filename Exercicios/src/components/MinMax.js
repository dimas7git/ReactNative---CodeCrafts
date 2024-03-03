import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
    //console.warn(props)
    return (
        <Text style={estilo.fontG}>
            O valor {props.max} é maior q o valor {props.min}
        </Text>
    )
}