import React from "react";
import { Button } from "react-native";

export default (props) => {
    function executar(){
        console.warn("exec 1")
    }

    return(
        <>
            <Button title="Executar 1" onPress={executar} />
            <Button title="Executar 2" onPress={function() {console.warn('exec 2')}} />
            <Button title="Executar 3" onPress={()=>console.warn('exec 3')} />
        </>
        )
}