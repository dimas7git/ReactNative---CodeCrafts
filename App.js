import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import Primeiro from './src/components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'

export default () => (
  <View style={style.App}>
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
  </View>
)

const style = StyleSheet.create({
  App:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

