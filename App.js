import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import PaiDireta from './src/components/direta/Pai'
// import PaiIndireta from './src/components/indireta/Pai'
//import ContadorV2 from './src/components/contador/ContadorV2'
import Diferenciar from './src/components/Diferenciar'
export default () => (
  <SafeAreaView style={style.App}>
    <Diferenciar />

    {/*
    <ContadorV2 />
    <PaiDireta />
    <PaiDireta />
    <Contador inicial={100} passo={13}/>
    <Botao />
    <Titulo principal="Cadastro" secundario="Tela de Cadastro" />
    <Aleatorio min={1} max={60}/>
     <MinMax min={3} max={20}/>
    <MinMax min={5} max={90}/>
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})

