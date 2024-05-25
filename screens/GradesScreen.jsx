import { View, Text } from 'react-native'
import React from 'react'
import SettingsSymbol from '../navigation/SettingsSymbol'
import NavBarGrades from '../navigation/NavBarGrades'
export default function Grades() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <SettingsSymbol/>
      <Text className="text-white">Noten </Text>
      <NavBarGrades/>
    </View>
      
    
  )
}