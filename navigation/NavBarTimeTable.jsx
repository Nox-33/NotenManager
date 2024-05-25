import { NativeWindStyleSheet } from 'nativewind';
import { View } from 'react-native';
import React from 'react';
import TimeTableTab from './NavBarComponents/TimeTableTab1';
import GradesTab from './NavBarComponents/GradesTab0';
import TestsTab from './NavBarComponents/TestsTab0';

export default function NavBarTimeTable() {
  return (
    <View className="w-full h-16 m-0 absolute inset-x-0 bottom-0 bg-neutral-900 border-neutral-950 border-y border-x">
      <View className="flex flex-row h-full">
        <TimeTableTab />
        <GradesTab />
        <TestsTab />
      </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
