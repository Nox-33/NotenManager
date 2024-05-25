import { View, Text } from 'react-native'
import React from 'react'
import NavBarTimeTable from '../navigation/NavBarTimeTable'
import SettingsSymbol from '../navigation/SettingsSymbol'

export default function TimeTable() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <SettingsSymbol />
      <Text className="text-white">TimeTable </Text>
      <NavBarTimeTable />
    </View>
  )
}