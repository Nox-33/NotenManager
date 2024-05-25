import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const TestsTab = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Tests')}
    className="flex-1 items-center justify-center rounded-2xl bg-neutral-800">
        <View className="items-center justify-center m-1">
          <Svg fill="#FFFFFF" className="h-6 w-6" viewBox="0 -960 960 960">
            <Path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </Svg>
        </View>
        <Text className="text-white text-sm">
          Schulaufgaben
        </Text>
    </TouchableOpacity>
  );
}
export default TestsTab;