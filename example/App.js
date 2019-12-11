import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import Toast from 'react-native-toast'
console.log(Toast)

const App = () => {

  return (
    <SafeAreaView>
      <Text>Modal</Text>
      <Button title="Open modal" onPress={() => {
        Toast.show('Mensage', Toast.SHORT)
      }} />
    </SafeAreaView>
  )
}

export default App
