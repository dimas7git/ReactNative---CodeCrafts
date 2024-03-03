import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'



// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
// import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import PaiDireta from './src/components/direta/Pai'
// import PaiIndireta from './src/components/indireta/Pai'
//import ContadorV2 from './src/components/contador/ContadorV2'
// import Diferenciar from './src/components/Diferenciar'
//import ParImpar from './src/components/ParImpar'
// import Familia from './src/relacao/Familia'
// import Membro from './src/relacao/Membro'
//import UsuarioLogado from './src/components/UsuarioLogado'
// import ListaProdutos from './src/components/produtos/ListaProdutos'
// import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './src/components/DigiteSeuNome'
//import Quadrado from './src/components/layout/Quadrado'
//import FlexboxV1 from './src/components/layout/FlexboxV1'
//import FlexboxV2 from './src/components/layout/FlexboxV2'
//import FlexboxV3 from './src/components/layout/FlexboxV3'
// import FlexboxV4 from './src/components/layout/FlexboxV4'
import Mega from './src/components/mega/Mega'


export default () => (
  <SafeAreaView style={style.App}>
    
    {/*
    <Mega qtdeNumeros={7}/>
    <FlexboxV4/>
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
      <UsuarioLogado usuario={{ nome: 'Gui', email: 'usuario@email.com' }} />
        <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
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
    padding: 20,
    backgroundColor: '#FFFFFF'
  }
})

