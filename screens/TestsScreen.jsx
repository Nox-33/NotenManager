import { View, Text } from 'react-native'
import React from 'react'
import SettingsSymbol from '../navigation/SettingsSymbol'
import NavBar from '../navigation/NavBar'
import NavBarTests from '../navigation/NavBarTests'

export default function Tests() {
  return (
  <View className="flex-1 items-center justify-center bg-neutral-900">
      <SettingsSymbol/>
      <Text className="text-white">Tests </Text>
      <NavBarTests/>
  </View>
  )
}