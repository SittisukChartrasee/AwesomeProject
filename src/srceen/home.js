import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation'
import { View, Text, Button } from 'react-native';

export default () => {
  const navigation = useContext(NavigationContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go To Detail" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  )
}