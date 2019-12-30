import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';
// import Modal, { ModalContent } from 'react-native-modals'
import { useSelector } from 'react-redux'

export default () => {
  const [visible, setVisible] = useState(false)
  const counter = useSelector(state => state)


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>detail Screen</Text>
      <Button title="save redux" onPress={() => {}} />
      <Button title="modal" onPress={() => setVisible(true)} />

      {/* <Modal
        visible={visible}
        swipeDirection={['up', 'down', 'right']} // can be string or an array
        swipeThreshold={200} // default 100
        onSwipeOut={(event) => setVisible(false)}
      >
        <ModalContent>
          <Text>detail Screen</Text>
        </ModalContent>
      </Modal> */}
    </View>
  )
}