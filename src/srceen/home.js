import React, { useContext, useEffect } from 'react';
import { NavigationContext } from 'react-navigation'
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions'


export default () => {
  const navigation = useContext(NavigationContext)
  const name = useSelector(state => state.user.name)
  const last = useSelector(state => state.user.lastName)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('ok')
    return () => {
      console.log('unmount')
    }
  }, [])

  onChangeText = (key) => (val) => {
    dispatch(actions(key, val))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput style={{ paddingVertical: 5, backgroundColor: 'lightgreen', width: '100%', textAlign: 'center', fontSize: 18 }} onChangeText={onChangeText('name')} />
      <TextInput style={{ paddingVertical: 5, backgroundColor: 'lightgreen', width: '100%', textAlign: 'center', fontSize: 18 }} onChangeText={onChangeText('lastName')} />
      <Button title="Go To Detail" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  )
}