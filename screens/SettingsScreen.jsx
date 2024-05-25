import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../navigation/NavBar'

export default function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <SettingsSymbol/>
      <Text className="text-center">SettingsScreen</Text>
      
      <NavBar/>
    </View>
  )
}
