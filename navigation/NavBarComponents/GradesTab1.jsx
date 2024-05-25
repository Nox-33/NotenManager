import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const GradesTab = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
     onPress={() => navigation.navigate('Grades')}
     className="flex-1 items-center justify-center rounded-2xl bg-neutral-800 ">
        <View className="items-center justify-center m-1">
          <Svg fill="#FFFFFF" className="h-6 w-6" viewBox="0 -960 960 960">
            <Path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" />
          </Svg>
        </View>
        <Text className="mt-0 text-white text-sm">
          Noten
          </Text>
    </TouchableOpacity>
  );
}
export default GradesTab;