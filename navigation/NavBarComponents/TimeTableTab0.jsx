import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const TimeTableTab = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('TimeTable')}
    className="flex-1 items-center justify-center rounded-2xl bg-neutral-900">
        <View className="items-center justify-center m-1">
          <Svg fill="#FFFFFF" className="h-6 w-6" viewBox="0 -960 960 960">
            <Path d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
          </Svg>
        </View>
        <Text className="text-white text-sm">
          Stundenplan
        </Text>
    </TouchableOpacity>
  );
}
export default TimeTableTab;