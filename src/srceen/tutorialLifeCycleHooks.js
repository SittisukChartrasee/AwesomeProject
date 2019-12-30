import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';

export default () => {
  const [get, set] = useState(true)
  // Didmount
  useEffect(() => {
    console.log('ok')
  })

  // Receive data change
  useEffect(() => {
    console.log('ok')
  }, [get])

  // Unmount
  useEffect(() => {
    console.log('ok')
    return () => {
      console.log('Unmount')
    }
  }, [get])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>tutorial life cycle Screen</Text>
    </View>
  )
}