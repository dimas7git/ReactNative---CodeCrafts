import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import Primeiro from './src/components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
import MinMax from './src/components/MinMax'
import Aleatorio from './src/components/Aleatorio'
import Titulo from './src/components/Titulo'

export default () => (
  <View style={style.App}>
    <Titulo principal="Cadastro" secundario="Tela de Cadastro" />
    {/*<Aleatorio min={1} max={60}/>
     <MinMax min={3} max={20}/>
    <MinMax min={5} max={90}/>
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})

